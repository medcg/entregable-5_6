document.querySelector(".enviar").addEventListener("click", function () {
    const form = document.querySelector(".formulario");
    console.log("First name:", form.first_name.value);
    console.log("Last name:", form.last_name.value);
    console.log("Email:", form.email_address.value);
    console.log("Company name:", form.company_name.value);
    console.log("Phone number:", form.phone_number.value);
    console.log("Message:", form.message.value);
    alert(
        "First name: " +
        form.first_name.value +
        "\nLast name: " +
        form.last_name.value +
        "\nEmail: " +
        form.email_address.value +
        "\nCompany name: " +
        form.company_name.value +
        "\nPhone number: " +
        form.phone_number.value +
        "\nMessage: " +
        form.message.value
    );
});