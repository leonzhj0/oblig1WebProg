$(function(){
    let billetter = [];
    let validering = true;

    $('#kjopBilett').click(function (){
        $('#tabellBilletter').css('display', 'inline-block');

        let ut;
        let filmInput = $('#filmer').val();
        let antallInput = $('#antallBilletter').val();
        let fornavnInput = $('#fornavn').val();
        let etternavnInput = $('#etternavn').val();
        let telefnrInput = $('#telefnr').val();
        let epostInput = $('#epost').val();

        $('.validering').text('');
        validering = true;

        if (filmInput == 'fyllTekst'){
            $('#filmValidering').text('Velg en film!');
            validering = false;
        }
        if (antallInput == null || antallInput == 0){
            $('#antallValidering').text('Skriv inn et tall større enn null.');
            validering = false;
        }
        let regNavn = /^[a-zA-ZæøåÆØÅ]+$/;
        if (regNavn.test(fornavnInput) === false || fornavnInput.trim() === ''){
            $('#fornavnValidering').text('Må skrive inn fornavnet ditt.');
            validering = false;
        }
        if (regNavn.test(etternavnInput) === false || etternavnInput.trim() === ''){
            $('#etternavnValidering').text('Må skrive inn etternavnet ditt.');
            validering = false;
        }
        const telefnrRegex = /^(\+\d{1,3})?[-.\s]?\d{1,3}([-.\s]?\d{2,3}){1,3}$/;
        if (!telefnrRegex.test(telefnrInput)) {
            $('#telefnrValidering').text('Skriv inn et gyldig tlfnr.');
            validering = false;
        }
        const epostRegex = /^\w+@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$/;
        if (!epostRegex.test(epostInput)){
            $('#epostValidering').text('Skriv inn gyldig epost.');
            validering = false;
        }

        if (validering) {
            const billettKjop = {
                film: filmInput,
                antall: antallInput,
                fornavn: fornavnInput,
                etternavn: etternavnInput,
                telefonnr: telefnrInput,
                epost: epostInput
            };
            billetter.push(billettKjop);

            ut += "<tr><td>" + billettKjop.film + "</td><td>" + billettKjop.antall + "</td><td>" +
                billettKjop.fornavn + "</td><td>" + billettKjop.etternavn + "</td><td>" + billettKjop.telefonnr
                + "</td><td>" + billettKjop.epost + "</td></tr>";
            $('#tabellBilletter').append(ut);

            // Clear input fields
            $('#filmer').val('fyllTekst');
            $('#antallBilletter').val('');
            $('#fornavn').val('');
            $('#etternavn').val('');
            $('#telefnr').val('');
            $('#epost').val('');
        }
    });

    $('#slettAlle').click(function (){
        billetter = [];
        $('#tabellBilletter tbody tr:not(:first-child)').empty();
        $('#tabellBilletter').css('display', 'none');
        console.log(billetter);
    });
});
