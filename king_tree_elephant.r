# Helper Functions
support_needs <- function(person){
  if(person == 'elderly')
    return('grocery delivery')
  else if(person == 'disabled')
    return('errand running')
  else if(person == 'single parent')
    return('babysitting')
  else if(person == 'chronic illness')
    return('remote medical care')
  else
    return('none')
}

# Main Function
helping_hands <- function(person){
  
  # Check if person needs help
  support <- support_needs(person)
  
  if(support != 'none'){
    # Retrieve list of local services
    local_services <- read.csv('local_services.csv')
    
    # Subset to services relevant to person
    services_needed <- subset(local_services, Type == support)
    
    # Sort by rating
    services_needed <- services_needed[order(services_needed$Rating, decreasing=T),]
    
    # Retrieve top 5 services
    top_5_services <- head(services_needed$Service,5)
    
    # Return top 5 services
    return(top_5_services)
  } else {
    return('Person does not need help.')
  }
}