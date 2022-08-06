// 1
let challenge = '30 days of javascript'
// 2
console.log(challenge);
// 3
console.log(challenge.length);
// 4
challenge.toUpperCase()
// 5
challenge.toLowerCase()
// 6
console.log(challenge.substring(0,2));
// 7
console.log(challenge.substring(2,21));
// 8
console.log(challenge.includes('script'));
// 9
console.log(challenge.split());
// 10
console.log(challenge.split(' '));
// 11
let bigC = 'Facebook, Google, Microsoft, Apple, IBM, Oracle, Amazon'
console.log(bigC.split(','));
// 12
console.log(challenge.replace('javascript', 'python'));
// 13
console.log(challenge.charAt(15));
// 14
console.log(challenge.charCodeAt(11))
// 15
console.log(challenge.indexOf('a'));
// 16
console.log(challenge.lastIndexOf('a'));
// 17
let because = 'You cannot end a sentence with because because because is a conjunction'
console.log(because.indexOf('because'));
// 18
console.log(because.lastIndexOf('because'));
// 19
console.log(because.search('because'));
// 20
let trimming = '  "30 Days Of JavaScript"  '
console.log(trimming.trim());
// 21
let starts = '30 Days Of JavaScript'
console.log(starts.startsWith('3'));
// 22
console.log(starts.endsWith('t'));
// 23
console.log(starts.match(/a/gi));
// 24
let part1 =  '30 Days of'
let part2 =  'JavaScript' 
console.log(part1.concat(' ').concat(part2));
// 25
let printing = '30 Days Of JavaScript'
console.log(printing.repeat(2));




// level 2
// 1
console.log("The quote 'There is no exercise better for the heart than reaching down and lifting people up.' by John Holmes teaches us to help one another.");
// 2
console.log(` "Love is not patronizing and charity isn't about pity, it is about love. Charity and love are the same -- with charity you give love, so don't just give money but reach out your hand instead." `);
// 3
let num = '10'
console.log(typeof(num));
let numInt = Number(num)
console.log(typeof(numInt));
// 4
console.log(Math.ceil(parseFloat('9.8')));
// 5
let py = 'python'
let jar = 'jargon'

console.log(py.includes('on') && jar.includes('on'));
// 6
let hope = 'I hope this course is not full of jargon'
console.log(hope.includes('jargon'));
// 7
console.log(Math.floor(Math.random() * 100 - 0 + 1) + 0);
// 8
console.log(Math.floor(Math.random() * 500 - 100 + 1) + 100);
// 9
console.log(Math.floor(Math.random() * 255 - 0 + 1) + 0);
// 10
let js = 'javasript'
console.log(js[4]);
// 11
console.log('1 1 1 1 1 \n 2 1 2 4 8 \n 3 1 3 9 27 \n 4 1 4 16 64 \n 5 1 5 25 125' );
// 12
let becauseBecause = 'You cannot end a sentence with because because because is a conjunction'
console.log(becauseBecause.substr(30, 25));




// level 3
// 1
let love = 'Love is the best thing in this world. Some found their love and some are still looking for their love.' 
console.log(love.split('love').length - 1);
// 2
let becauseNew = 'You cannot end a sentence with because because because is a conjunction'
console.log(becauseNew.match(/because/g).length);
// 3
const sentence = '%I $am@% a %tea@cher%, &and& I lo%#ve %te@a@ching%;. The@re $is no@th@ing; &as& mo@re rewarding as educa@ting &and& @emp%o@weri@ng peo@ple. ;I found tea@ching m%o@re interesting tha@n any ot#her %jo@bs. %Do@es thi%s mo@tiv#ate yo@u to be a tea@cher!? %Th#is 30#Days&OfJavaScript &is al@so $the $resu@lt of &love& of tea&ching'
// 4
let annualIncome =  'He earns 5000 euro from salary per month, 10000 euro annual bonus, 15000 euro online courses per month.'
let perAnnum = annualIncome.match(/\d+/g)
let perAnnumNum = perAnnum.map(Number)
let totalAnnualIncome = perAnnumNum.reduce((a,b) => a + b, 0)
console.log(totalAnnualIncome)