import Foundation

class HelpingHands {
    
    // Properties
    var organizationName: String
    var missionStatement: String
    var location: String
    var yearFounded: Int
    var eligibleVolunteers: [String]
    
    // Initialization
    init(organizationName: String, missionStatement: String, location: String, yearFounded: Int, eligibleVolunteers: [String]) {
        self.organizationName = organizationName
        self.missionStatement = missionStatement
        self.location = location
        self.yearFounded = yearFounded
        self.eligibleVolunteers = eligibleVolunteers
    }
    
    // Methods
    func registerVolunteer(name: String) {
        // Check if the volunteer is eligible to volunteer
        if eligibleVolunteers.contains(name) {
            print("\(name) is eligible to volunteer with us. Registering now...")
        } else {
            print("Sorry, \(name) is not eligible to volunteer with us.")
        }
    }
    
    func displayAboutOrganization() -> String {
        let aboutOrganization = "Organization Name: \(organizationName) \nMission Statement: \(missionStatement) \nLocation: \(location) \nYear Founded: \(yearFounded)"
        return aboutOrganization
    }
    
    func displayVolunteers() -> [String] {
        let volunteersString = "Currently active volunteers: \(eligibleVolunteers)"
        return eligibleVolunteers
    }
    
    func updateOrganization(newName: String, newMissionStatement: String, newLocation: String, newYearFounded: Int) {
        organizationName = newName
        missionStatement = newMissionStatement
        location = newLocation
        yearFounded = newYearFounded
    }
    
    func addVolunteer(name: String) {
        eligibleVolunteers.append(name)
    }
    
    func deleteVolunteer(name: String) {
        if let index = eligibleVolunteers.index(of: name) {
            eligibleVolunteers.remove(at: index)
        }
    }
    
    func startCampaign(name: String, goalAmount: Int, duration: Int) {
        print("Starting new campaign named: \(name) with goal amount of \(goalAmount) for the duration of \(duration)")
    }
    
    func findLocalEvents() -> [String] {
        let localEvents = ["Concert in the Park", "Food Drive", "Beach Cleanup"]
        return localEvents
    }
    
    func searchDonors() -> [String] {
        let donors = ["John Smith", "Jane Doe", "Frederick Jones"]
        return donors
    }
    
    func updateDonorRecords(name: String, amountContributed: Int) {
        print("Updating \(name)'s records with an amount contributed of \(amountContributed)")
    }
    
    func searchVolunteers() -> [String] {
        let volunteers = ["Bob Smith", "Mary Johnson", "John Doe"]
        return volunteers
    }
    
    func updateVolunteerRecords(name: String, volunteerHours: Int) {
        print("Updating \(name)'s records with volunteer hours of \(volunteerHours)")
    }
    
    func createEvents() {
        let eventName = "Beach Cleanup"
        let eventLocation = "Santa Monica Beach"
        let startTime = "7:00am" 
        let endTime = "9:00am"
        
        print("Creating new event named \(eventName) at \(eventLocation) from \(startTime) to \(endTime)")
    }
    
    func updateEvent(oldEventName: String, newEventName: String, newEventLocation: String, newStartTime: String, newEndTime: String) {
        print("Updating event named \(oldEventName) to \(newEventName) at \(newEventLocation) from \(newStartTime) to \(newEndTime)")
    }
    
    func deleteEvent(eventName: String) {
        print("Deleting event named \(eventName)")
    }
    
    func connectToSocialMedia() {
        let socialMediaPlatforms = ["Facebook", "Twitter", "Instagram"]
        for platform in socialMediaPlatforms {
            print("Connecting to \(platform)")
        }
    }
    
    func postToSocialMedia(content: String) {
        let socialMediaPlatforms = ["Facebook", "Twitter", "Instagram"]
        for platform in socialMediaPlatforms {
            print("Posting '\(content)' to \(platform)")
        }
    }
    
    func createDonorRecognitionProgram() {
        print("Creating new donor recognition program")
    }
    
    func createVolunteerRecognitionProgram() {
        print("Creating new volunteer recognition program")
    }
    
    func sendThankYouLetters() {
        print("Sending thank you letters to donors")
    }
    
    func sendVolunteerCertificates() {
        print("Sending volunteer certificates to volunteers")
    }
    
    func displaySocialMediaProgress() {
        print("Displaying social media progress")
    }
    
    func displayDonorPerformance() {
        print("Displaying donor performance")
    }
    
    func displayVolunteerPerformance() {
        print("Displaying volunteer performance")
    }
    
    func acceptDonations() {
        print("Accepting donations")
    }
    
    func writeBlogPosts() {
        print("Writing blog posts")
    }
    
    func createNewsletter() {
        print("Creating newsletter")
    }
}