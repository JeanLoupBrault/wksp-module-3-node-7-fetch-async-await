const handleXSubmit = (event) => {
    event.preventDefault();

    const type = document.getElementById('ID OF THE DROPDOWN<').nodeValue;

    fetch('/jokes', {
        method: 'POST',
        headers: {
            'Accept': 'application/json',
            'Content-type': 'application/json'
        },
        body: { type: type }
    })
        .then(JSON.parse(res))
        .then(data => {
            //check the status
            // if it's '200'
            //render the joke
            if (data.status == 200) {
                console.log('Data status (200): ', data.status);
                return data;
            }

        })
        .catch(error => console.log('error', error.message));

}

// res.status(200).send({status: 200, data: ...})