class Company {
    constructor(name, symbol) {
        this.name = name;
        this.symbol = symbol;
}
    describe() {
        return `${this.name} has this symbol: ${this.symbol}.`;
    }
//Created class "Company" that contains the constructors "name" and "symbol". This allows the class to be called later with input variables that will then be put into the constructor and created with two characteristics in the class.
}
class Industry {
    constructor(name) {
        this.name = name;
        this.companies = [];
    }
// Used an array to then build the companies that are going to be put inside of the industry, built a class here by reusing the class declaration from above for the "comany" class.

    addCompany(company) {
        if (company instanceof Company) {
            this.companies.push(company);
        } else {
            throw new Error(`That doesn't seem correct, try again.`);
        }
    }
// Created an "addCompany" method where the company is input as "company" and then pushed into the company array created above with the input company details (that being name and symbol).
    describe() {
        return `${this.name} has ${this.companies.length} companies.`;
    }
}
class Menu {
    constructor() {
        this.industries = [];
        this.selectedIndustry = null;
    }
  
// This class is the Menu class that will contain the industries within it, where the input is industry is provided with industries.

    start() {
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
// This starts the menu options where the options within the main menu options are "A", "B", "C", "D", or "0", each with corresponding connections to the options below, unless 0 is chosen, then it will give an alert "goodbye".
    showMainMenuOptions() {
        return prompt(`
            0) exit
            A) create a new Industry
            B) view a Industry
            C) delete a Industry
            D) display all Industries
        `);
    }
// The methods then are created from here, going down that will show the main menu and give several options including to add, view, or delete an industry, followed by all company options including adding deleting the companies.    
    showIndustryMenuOptions(industryInfo) {
        return prompt(`
            0) back
            1) add a new company
            2) delete a company
            -----------------
            ${industryInfo}
        `);
    }
// Following this are the methods for doing each of the above options so that displaying industries, creating an industry, view an industry (by index), delete an industry, create a company, and deleting a company.
    displayIndustries() {
        let industryString = '';
            for (let i = 0; i < this.industries.length; i++) {
            industryString += i+ ') ' + this.Industries[i].name + '\n';
            }
        alert(industryString);
    }
    
    createIndustry() {
        let name = prompt('Enter name for new Industry: ');
        this.industries.push(new Industry(name));
    }
    
    viewIndustry() {
        let index = prompt("Enter the index of the Industry that you want to view:");
        if (index > -1 && index < this.industries.length) {
            this.selectedIndustry = this.industries[index];
            let description = 'Industry Name: ' + this.selectedIndustry.name + '\n';
            description += ' ' + this.selectedIndustry.describe() + '\n ';
            for (let i = 0; i < this.selectedIndustry.companies.length; i++) {
                description += i + ') ' + this.selectedIndustry.companies[i].describe() + '\n';
                }
            let selection1 = this.showIndustryMenuOptions(description);
            switch (selection1) {
                case '1' :
                this.createCompany();
                break;
                case '2' :
                this.deleteCompany();
            }
        }
    }
    
    deleteIndustry() {
        let index = prompt('Enter the index of the Industry that you wish to delete: ');
        if (index > -1 && index < this.industries.length) {
            this.industries.splice(index,1);
        }
    }
    
    
    createCompany() {
        let name = prompt('Enter name for new company: ');
        let symbol = prompt('Enter symbol for new company: ');
        this.selectedIndustry.addCompany(new Company(name,symbol));
    }
    
    deleteCompany() {
        let index = prompt('Enter the index of the company that you wish to delete: ');
        if (index > -1 && index < this.selectedIndustry.companies.length) { 
            this.selectedIndustry.companies.splice(index,1);
        }
    }
}
// Finally, answered the above call for menu by ending it down here if no other options are chosen.
    let menu = new Menu();
    menu.start();