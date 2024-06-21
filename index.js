// Industries and Companies in those industries
class Company {
    constructor(name, symbol) {
        this.name = name;
        this.symbol = symbol;
    }
    
    describe() {
        //console.log(`${this.name} has this symbol: ${this.symbol}`)
        return `${this.name} has this symbol: ${this.symbol}`;
    }
}
class Industry {
    constructor(name) {
        this.name = name;
        this.companies = [];
    }
    
    addCompany(company) {
        if (company instanceof Company) {
            this.companies.push(company);
        } else {
            throw new Error(`You can only add an instance of a company.
            Argument is not a company: ${company}`);
        }
    }
    
    describe() {
        return `${this.name} has ${this.companies.length} companies.`;
    }
}
class Menu { // what drives the application and our choices
    constructor() {
        this.Industries = [];
        this.selectedIndustry = null; // manage one Industry at a time
    }
    
    start() { // entry point to application
        let selection = this.showMainMenuOptions(); 
        while (selection != 0) {
            switch(selection) {
                case 'A' :
                    this.createIndustry();
                    break;
                case 'B' :
                    this.viewIndustry();
                    break;
                case 'C' :
                    this.deleteIndustry();
                    break;
                case 'D' :
                    this.displayIndustries();
                    break;
                default:
                    selection = 0;
                }
            selection = this.showMainMenuOptions();
        }
        alert('Goodbye!');
    }

    showMainMenuOptions() {
        return prompt(`
            0) exit
            A) create a new Industry
            B) view a Industry
            C) delete a Industry
            D) display all Industries
        `);
    }
    
    showIndustryMenuOptions(IndustryInfo) {
        return prompt(`
            0) back
            1) add a new company
            2) delete a company
            -----------------
            ${IndustryInfo}
        `);
    }
    
    displayIndustries() {
        let Industriestring = '';
            for (let i = 0; i < this.Industries.length; i++) {
            Industriestring += i+ ') ' + this.Industries[i].name + '\n';
            }
        alert(Industriestring);
    }
    
    createIndustry() {
        let name = prompt('Enter name for new Industry: ');
        this.Industries.push(new Industry(name));
    }
    
    viewIndustry() {
        let index = prompt("Enter the index of the Industry that you want to view:");
        if (index > -1 && index < this.Industries.length) {
            this.selectedIndustry = this.Industries[index];
            let description = 'Industry Name: ' + this.selectedIndustry.name + '\n';
            description += ' ' + this.selectedIndustry.describe() + '\n ';
            for (let i = 0; i < this.selectedIndustry.companies.length; i++) {
                // description += i + ') ' + this.selectedIndustry.companies[i].name + ' - '
                // + this.selectedIndustry.companies[i].symbol + '\n';
                description += i + ') ' + this.selectedIndustry.companies[i].describe() + '\n';
                }
            let selection1 = this.showIndustryMenuOptions(description);
            switch (selection1) {
                case '1' :
                this.createcompany();
                break;
                case '2' :
                this.deletecompany();
            }
        } // validate user input
    }
    
    deleteIndustry() {
        let index = prompt('Enter the index of the Industry that you wish to delete: ');
        if (index > -1 && index < this.Industries.length) {
            this.Industries.splice(index,1);
        }
    }
    
    
    createcompany() {
        let name = prompt('Enter name for new company: ');
        let symbol = prompt('Enter symbol for new company: ');
        //this.selectedIndustry.companies.push(new company(name, symbol));
        this.selectedIndustry.addcompany(new Company(name,symbol));
    }
    
    deletecompany() {
        let index = prompt('Enter the index of the company that you wish to delete: ');
        if (index > -1 && index < this.selectedIndustry.companies.length) { this.selectedIndustry.companies.splice(index,1);
        }
    }
    }
    let menu = new Menu();
    menu.start();
    