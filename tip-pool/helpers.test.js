describe('helpers tests (with setup and tear-down)', function () {
    beforeEach(function () {
        billAmtInput.value = 50;
        tipAmtInput.value = 10;
        submitPaymentInfo();
    });

    it('Should sum like keys in allPayments and return correct amount on sumPaymentTotal()', function () {
        expect(sumPaymentTotal('tipAmt')).toEqual(10);
        expect(sumPaymentTotal('billAmt')).toEqual(50);
        expect(sumPaymentTotal('tipPercent')).toEqual(20);

        billAmtInput.value = 100;
        tipAmtInput.value = 20;

        submitPaymentInfo();

        expect(sumPaymentTotal('tipAmt')).toEqual(30);
        expect(sumPaymentTotal('billAmt')).toEqual(150);
        expect(sumPaymentTotal('tipPercent')).toEqual(40);
    });

    it('Should calculate correct tip percentage on calculateTipPercent()', function () {
        expect(calculateTipPercent(50, 10)).toEqual(20);
        expect(calculateTipPercent(100, 42)).toEqual(42);
    });

    it('Should create new td and append to tr on appendTd(tr, value)', function () {
        let newRow = document.createElement('tr');

        appendTd(newRow, 'test');

        expect(newRow.children.length).toEqual(1);
        expect(newRow.firstChild.innerText).toEqual('test');
    });

    it('Should create delete td and append to tr on appendDeleteBtn(tr)', function () {
        let newRow = document.createElement('tr');

        appendDeleteBtn(newRow);

        expect(newRow.children.length).toEqual(1);
        expect(newRow.firstChild.innerText).toEqual('X');
    });

    afterEach(function () {
        billAmtInput.value = '';
        tipAmtInput.value = '';
        paymentTbody.innerHTML = '';
        summaryTds[0].innerHTML = '';
        summaryTds[1].innerHTML = '';
        summaryTds[2].innerHTML = '';
        serverTbody.innerHTML = '';
        paymentId = 0;
        allPayments = {};
    });
});