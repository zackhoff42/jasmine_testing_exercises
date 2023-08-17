describe('Payments tests (With setup and tear-down)', function () {
    beforeEach(function () {
        billAmtInput.value = 50;
        tipAmtInput.value = 10;
    });

    it('Should add payment to allPayments on submitPaymentInfo()', function () {
        submitPaymentInfo();

        expect(Object.keys(allPayments).length).toBe(1);
        expect(allPayments['payment1'].billAmt).toBe('50');
        expect(allPayments['payment1'].tipAmt).toBe('10');
        expect(allPayments['payment1'].tipPercent).toBe(20);
    });

    it('Should not add payment to allPayments object on empty inputs on createCurPayment()', function () {
        billAmtInput.value = '';

        submitPaymentInfo();

        expect(Object.keys(allPayments).length).toBe(0);
    });

    it('Should not add payment to allPayments object on negative inputs on createCurPayment()', function () {
        billAmtInput.value = -50;

        submitPaymentInfo();

        expect(Object.keys(allPayments).length).toBe(0);
    });

    it('Should add new payment to #paymentTable on appendPaymentTable()', function () {
        let payment = createCurPayment();
        allPayments['payment1'] = payment;

        appendPaymentTable(payment);

        let paymentList = document.querySelectorAll('#paymentTable tbody tr td');

        expect(paymentList.length).toBe(4);
        expect(paymentList[0].innerText).toBe('$50');
        expect(paymentList[1].innerText).toBe('$10');
        expect(paymentList[2].innerText).toBe('20%');
        expect(paymentList[3].innerText).toBe('X');
    });

    it('Should create new payment on createCurPayment', function () {
        let newPayment = {
            billAmt: '50',
            tipAmt: '10',
            tipPercent: 20
        };

        expect(newPayment).toEqual(createCurPayment());
    });

    it('Should not create new payment on invalid inputs (negative or empty)', function () {
        billAmtInput.value = '-50';
        tipAmtInput.value = '';

        expect(createCurPayment()).toEqual(undefined);
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