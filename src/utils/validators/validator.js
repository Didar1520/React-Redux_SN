export const requierdField = value => {
    console.log('sdsads');
    if (value) return undefined
    return 'это поле обязательное ара'
}

export const defaultValidator = (values) => {
    const errors = {};
    if (!values.login) {
        errors.login = 'Required';
    } else if (

        !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.login)

    ) {
        errors.login = <div >{console.log(errors)}Недопустиый адрес</div>;
    }
    return errors;

}