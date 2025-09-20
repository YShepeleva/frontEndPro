// Вам потрібно зробити конструктор сутності "Студент". Студент має ім'я, прізвище, рік народження — це властивості. Є масив з оцінками, це також властивість. І є можливість отримати вік студента та його середній бал – це методи.
// Ще у всіх Студентів є по масиву однакової довжини, у ньому 25 елементів, спочатку він не заповнений, але на 25 елементів. Це масив, в якому відзначається відвідуваність, щоразу коли ми викликаємо метод .present() на чергове порожнє місце, в масив записується true, коли викликаємо .absent() - записується false. 
// Передбачте будь-який захист від того, щоб у масиві відвідуваності не могло бути більше 25 записів. Масив – це властивість, present та absent – методи.
// Останній метод: .summary(), перевіряє середню оцінку і середнє відвідування(кількістьВідвідин/кількістьЗанять), і якщо середня оцінка більше 90, а середнє відвідування більше 0.9, то метод summary повертає рядок "Молодець!", якщо одне з цих значень менше , то - "Добре, але можна краще ", якщо обидва нижче - "Редиска!".
// Не забудьте після того, як напишите цей конструктор, створити 2-3 екземпляри (конкретних студентів) і показати використання цих методів.


class Student {
    constructor(name, surname, yearBirth, scores) {
        this.name = name;
        this.surname = surname;
        this.yearBirth = yearBirth;
        this.scores = scores || [];
        this.attending = new Array(25).fill(null);
        this.currentIndex = 0;

        // Властивість
        Object.defineProperty(this, 'age', {
            get() {
                const currentYear = new Date().getFullYear();
                return currentYear - this.yearBirth;
            }
        });
    }
    //середня оцінка
    getAverage() {
        if (this.scores.length === 0) return 0;
        const sum = this.scores.reduce((acc, score) => acc + score, 0);
        return sum / this.scores.length;
    }

    present() {
        if (this.currentIndex < this.attending.length) {
            this.attending[this.currentIndex] = true;
            this.currentIndex++;
        }
    }

    absent() {
        if (this.currentIndex < this.attending.length) {
            this.attending[this.currentIndex] = false;
            this.currentIndex++;
        }
    }
    //середня відвідуваность 
    getAverageAttending() {
        const sum = this.attending.reduce((acc, value) => acc + (value ? 1 : 0), 0);
        return sum / this.attending.length;
    }

    summary() {
        const avg = this.getAverage();
        const avgAtt = this.getAverageAttending();

        console.log(`${this.name} ${this.surname}`);
        console.log(`Середній бал: ${avg}`);
        console.log(`Середня відвідуваність: ${avgAtt}`);

        if (avg > 90 && avgAtt > 0.9) {
            console.log("Молодець!")
        } else if (avg >= 90 || avgAtt >= 0.9) {
            console.log("Добре, але можна краще")
        } else {
            console.log("Редиска!")
        }
    }
}

const student1 = new Student("Olena", "Petrenko", 2004, [95, 98, 97, 92]);
student1.summary();
const student2 = new Student("Maksym", "Shevchenko", 2003, [60, 70, 50, 65]);
student2.summary();



