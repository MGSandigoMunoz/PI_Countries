export default function validation (input) {
    //input va a ser email || password del usuario. Es decir el estado de ActivityData
    
    // Expresión regular que verifica si solo contiene letras
    const nameregex = /^[a-zA-Z, ]+$/;
    
    const error={}
    

        //VALIDACIONES NAME
    
            if(!input.activityName){
                error.name = "You must write the name of the activity"
            }
    
            if(input.activityName?.length>20){
                error.name = "The activity name must not be more than 20 characters"
            }

            if(!nameregex.test(input.activityName)){
                error.name = "The name of the activity should not have numbers"
            }
       
        //VALIDACIONES COUNTRIES 
    
        if(!input.countryName){
            error.countries = "You must write the name of the country"
        }

        if(input.countryName.length>35){
            error.countries = "The country name must not be more than 35 characters"
        }

        if(!nameregex.test(input.countryName)){
            error.countries= "The name of the country should not have numbers"
        }
                  
       
    
        return error
    
    }