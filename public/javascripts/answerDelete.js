const deleteBtns = document.querySelectorAll('.delete-btn-answer')

for (let i = 0; i < deleteBtns.length; i++) {
    const btn = deleteBtns[i];

    btn.addEventListener('click', async(e) => {
        const answerId = e.target.id.split('-')[2]
        const res = await fetch(`/answer/${answerId}`, {
            method: 'DELETE'
        })
        if (res) {
            document.location.reload(true)
        }
    })
}
