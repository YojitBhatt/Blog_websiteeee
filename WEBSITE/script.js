const form = document.getElementById('blogForm');
const blogList = document.getElementById('blogList');
let blogs = [];

function renderBlogs() {
    blogList.innerHTML = '';
    if (blogs.length === 0) {
        blogList.innerHTML = '<p>No blogs posted yet.</p>';
        return;
    }
    blogs.slice().reverse().forEach(blog => {
        const div = document.createElement('div');
        div.className = 'blog-entry';
        div.innerHTML = `
            <div class="blog-title">${blog.title}</div>
            <div class="blog-date">${blog.date}</div>
            <div class="blog-content">${blog.content.replace(/\n/g, '<br>')}</div>
        `;
        blogList.appendChild(div);
    });
}

form.addEventListener('submit', function(e) {
    e.preventDefault();
    const title = document.getElementById('title').value.trim();
    const content = document.getElementById('content').value.trim();
    if (!title || !content) return;

    const blog = {
        title,
        content,
        date: new Date().toLocaleString()
    };
    blogs.push(blog);
    renderBlogs();
    form.reset();
});

// Initial render
renderBlogs();