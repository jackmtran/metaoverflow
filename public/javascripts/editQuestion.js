const editBtns = document.querySelectorAll('.edit-btn')

for (let i = 0; i < editBtns.length; i++) {
    const bton = editBtns[i];

    bton.addEventListener('click', async(e) => {
        const EditedId = e.target.id.split('-')[2]
        console.log(EditedId);
        const res = await fetch(`/question/${EditedId}`, {
          method: 'PUT',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({
              title,
              question
          })
      })
        if (res) {
            window.location.href=('/questions')
        }
    })
}
