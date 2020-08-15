function submitForm(event, url) {
    event.preventDefault();
    event.stopPropagation();

    const formData = new FormData(event.target);
    const data = new URLSearchParams(formData);
    const alert = document.querySelector('.alert');
    const feedback = document.querySelector('.feedback');

    if (event.target.checkValidity() === false) {
        feedback.innerHTML = 'Please fill all the required fields.';
        alert.classList.add('alert-danger');
        alert.classList.remove('alert-success');
    }

    feedback.innerHTML = "<div class='spinner-border' role='status'><span class='sr-only'>Loading...</span>";
    alert.classList.remove('alert-danger');
    alert.classList.remove('alert-success');
    alert.classList.remove('invisible');
    alert.classList.add('visible');

    fetch(url, { 
        body: data, 
        method: 'post', 
        mode: 'no-cors'
    }).then((response) => {
        feedback.innerHTML = 'Sent!';
        alert.classList.remove('alert-danger');
        alert.classList.add('alert-success');

        setTimeout(() => {
            event.target.reset();
            alert.classList.remove('visible');
            alert.classList.add('invisible');
            $('.modal').modal('hide');
        }, 1000);
    });
}
