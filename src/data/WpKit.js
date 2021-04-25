
//skapar en klass för att lättare hantera hämtning av data
//från olika endpoints

//WORDPRESS REST API
//const ENDPOINT = "http://adminmatildaeidelof.local/wp-json/wp/v2/";


//Egen Custom API med anpassade slutpunkter
const ENDPOINT = "http://meadmin.local/wp-json/me/v1/"

export default class WpClass{
    
    //Funktion som hämtar data från "pages"
    //id på sidan skickas med som en parament för att hämta rätt sida.
    
    async getPage(id){
        const url = `${ENDPOINT}pages/${id}`;
        return fetch(url)
    }

    async getFaq(){
        const url = `${ENDPOINT}faq`
        return fetch(url)
    }

    async getPortfolio(){
        const url = `${ENDPOINT}portfolio`
        return fetch(url)
    }

    async getProducts(){
        const url = `${ENDPOINT}products`
        return fetch(url)
    }

    async getFooter(id){
        const url = `${ENDPOINT}footer-settings/${id}`
        return fetch(url)
    }

}