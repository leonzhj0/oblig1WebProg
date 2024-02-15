$(function(){
    let billetter = [];


    $('#kjopBilett').click(function (){
        $('#tabellBilletter').css('display', 'inline-block');

        let ut;
        let filmInput = $('#filmer').val();
        let antallInput = $('#antallBilletter').val();
        let fornavnInput = $('#fornavn').val();
        let etternavnInput = $('#etternavn').val();
        let telefnrInput = $('#telefnr').val();
        let epostInput = $('#epost').val();

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

        $('#filmer').val('fyllTekst');
        $('#antallBilletter').val('');
        $('#fornavn').val('');
        $('#etternavn').val('');
        $('#telefnr').val('');
        $('#epost').val('');
    });

    $('#slettAlle').click(function (){
        billetter = [];
        $('#tabellBilletter tbody tr:not(:first-child)').empty();
        $('#tabellBilletter').css('display', 'none');

        console.log(billetter);
    });
});
