import Swal from 'sweetalert2'

export const submit = async (values) => {
    console.log(JSON.stringify(values))
    const response = await fetch('/overview', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json;charset=utf-8',
        },
        body: JSON.stringify(values),
    })
    if (response.ok) {
        Swal.fire('Good job!', '', 'success').then((data) => data)
    } else {
        Swal.fire('Something went wrong!', '', 'error').then((data) => data)
    }
}
