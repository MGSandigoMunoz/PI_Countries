export default function validation (input) {
    //input va a ser email || password del usuario. Es decir el estado de ActivityData
    
    // Expresión regular que verifica si solo contiene letras
    const nameregex = /^[a-zA-Z, ]+$/;
    
    const error={}
    

        //VALIDACIONES NAME
    
            if(!input.name){
                error.name = "You must write the name of the activity"
            }
    
            if(input.name.length>20){
                error.name = "The activity name must not be more than 20 characters"
            }

            if(!nameregex.test(input.name)){
                error.name = "The name of the activity should not have numbers"
            }
       
        //VALIDACIONES COUNTRIES
    
        if(!input.countries){
            error.countries = "You must write the name of the country"
        }

        if(input.countries.length>35){
            error.countries = "The country name must not be more than 35 characters"
        }

        if(!nameregex.test(input.countries)){
            error.countries= "The name of the country should not have numbers"
        }
                  
       
    
        return error
    
    }