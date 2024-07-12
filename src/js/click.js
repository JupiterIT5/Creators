document.onmousemove = (e) => {
    document.onclick = () => {
        let circle = document.createElement('div');
        circle.classList.add('click')
        circle.style.left = e.pageX + 'px'
        circle.style.top = e.pageY + 'px';
        document.body.appendChild(circle);

        setTimeout(() => {
            circle.remove()
        }, 1000)
    }
}