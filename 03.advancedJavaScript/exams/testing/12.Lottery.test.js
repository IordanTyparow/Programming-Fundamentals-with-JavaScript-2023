let lottery = require('./12.Lottery');
let expect = require('chai').expect;

describe('LotteryTesting...', () => {
    it('buyLotteryTicket', () => {
        expect(() => { lottery.buyLotteryTicket(5, 2, false) }).to.throw('Unable to buy lottery ticket!');
        expect(() => { lottery.buyLotteryTicket(0, 0, true) }).to.throw('Invalid input!');
        expect(() => { lottery.buyLotteryTicket(-1, 1, true) }).to.throw('Invalid input!');
        expect(() => { lottery.buyLotteryTicket('str', 2, true) }).to.throw('Invalid input!');
        expect(() => { lottery.buyLotteryTicket(2, 'str', true) }).to.throw('Invalid input!');
        expect(() => { lottery.buyLotteryTicket('str', 'str', true) }).to.throw('Invalid input!');
        expect(() => { lottery.buyLotteryTicket(2, 2, 'notBoolean') }).to.throw('Invalid input!');
        expect(() => { lottery.buyLotteryTicket('str', 'str', 'notBoolean') }).to.throw('Invalid input!');
        expect(lottery.buyLotteryTicket(10, 2, true)).to.equal('You bought 2 tickets for 20$.')
    });

    it('checkTicket', () => {
        expect(() => lottery.checkTicket('str', [])).to.throw('Invalid input!');
        expect(() => lottery.checkTicket([], 'str')).to.throw('Invalid input!');
        expect(() => lottery.checkTicket('str', 'str')).to.throw('Invalid input!');
        expect(() => lottery.checkTicket([1, 2, 3, 4, 5], [])).to.throw('Invalid input!');
        expect(() => lottery.checkTicket([], [1, 2, 3, 4, 5])).to.throw('Invalid input!');
        expect(() => lottery.checkTicket([], [])).to.throw('Invalid input!');
        expect(lottery.checkTicket([1, 2, 3, 4, 5, 6], [3, 4, 5, 9, 8, 7])).to.equal('Congratulations you win, check your reward!');
        expect(lottery.checkTicket([1, 2, 3, 4, 5, 9], [3, 4, 5, 9, 8, 7])).to.equal('Congratulations you win, check your reward!');
        expect(lottery.checkTicket([1, 2, 3, 4, 5, 6], [1, 2, 3, 4, 5, 6])).to.equal('You win the JACKPOT!!!');
    });

    it('secondChance', () => {
        expect(() => { lottery.secondChance('str', []) }).to.throw('Invalid input!');
        expect(() => { lottery.secondChance(3, 'str') }).to.throw('Invalid input!');
        expect(() => { lottery.secondChance('str', 'str') }).to.throw('Invalid input!');
        expect(lottery.secondChance(3, [1, 2, 3])).to.equal('You win our second chance prize!');
        expect(lottery.secondChance(3, [1, 2, 4])).to.equal(`Sorry, your ticket didn't win!`);
    });
});
