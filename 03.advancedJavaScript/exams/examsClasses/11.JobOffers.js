class JobOffers {
    constructor(employer, possition) {
        this.employer = employer;
        this.possition = possition;
        this.jobCandidates = [];
    }

    jobApplication(candidates) {
        let resultNames = [];
        candidates.forEach(candidate => {
            let [name, education, yearsExperience] = candidate.split('-');
            yearsExperience = Number(yearsExperience);

            let currCandidate = this.jobCandidates.find(x => x.name === name);

            if (currCandidate) {
                if (yearsExperience > currCandidate.yearsExperience) {
                    currCandidate.yearsExperience = yearsExperience;
                }
            } else {
                resultNames.push(name);
                this.jobCandidates.push({ name, education, yearsExperience });
            }

        });
        return `You successfully added candidates: ${resultNames.join(', ')}.`;
    }

    jobOffer(chosenPerson) {
        let [name, minimalExperience] = chosenPerson.split('-');
        minimalExperience = Number(minimalExperience);

        let currentPerson = this.jobCandidates.find(x => x.name === name);

        if (currentPerson === undefined) {
            throw new Error(`${name} is not in the candidates list!`);
        }

        if (minimalExperience > currentPerson.yearsExperience) {
            throw new Error(`${name} does not have enough experience as ${this.possition}, minimum requirement is ${minimalExperience} years.`);
        }

        currentPerson.yearsExperience = 'hired';
        return `Welcome aboard, our newest employee is ${name}.`;
    }

    salaryBonus(name) {
        let currentPerson = this.jobCandidates.find(x => x.name === name);

        if (currentPerson === undefined) {
            throw new Error(`${name} is not in the candidates list!`);
        }

        if (currentPerson.education === 'Bachelor') {
            return `${name} will sign a contract for ${this.employer}, as ${this.possition} with a salary of $50,000 per year!`;
        }
        if (currentPerson.education === 'Master') {
            return `${name} will sign a contract for ${this.employer}, as ${this.possition} with a salary of $60,000 per year!`;
        }

        return `${name} will sign a contract for ${this.employer}, as ${this.possition} with a salary of $40,000 per year!`;
    }

    candidatesDatabase() {
        if (this.jobCandidates.length === 0) {
            throw new Error('Candidate Database is empty!');
        }

        let result = ['Candidates list:'];
        this.jobCandidates.sort((a, b) => a.name.localeCompare(b.name)).forEach(x => result.push(`${x.name}-${x.yearsExperience}`));

        return result.join('\n');
    }
}

let Jobs = new JobOffers ("Google", "Strategy Analyst");
 console.log(Jobs.jobApplication(["John Doe-Bachelor-10", "Peter Parker-Master-5","Jordan Cole-High School-5", "Daniel Jones- Bachelor-18"]));
 console.log(Jobs.jobOffer("John Doe-8"));
 console.log(Jobs.jobOffer("Peter Parker-4"));
 console.log(Jobs.jobOffer("Jordan Cole-4"));
 console.log(Jobs.salaryBonus("Jordan Cole"));
 console.log(Jobs.salaryBonus("John Doe"));
 console.log(Jobs.candidatesDatabase());







