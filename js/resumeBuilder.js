/*
This is empty on purpose! Your code to build the resume will go here.
 */
var bio = {
    name: "Aditi Malviya",
    role: "Frontend Developer",
    contacts: {
        email: "aditimalviya9@gmail.com",
        github: "https://github.com/aditimalviya/",
        location: "Bangalore"
    },
    welcomeMessage: "Hello, I am Aditi",
    skills: ["Html", "CSS", "JavaScript", "Bootstrap", "jQuery"],
    biopic: "https://aditimalviya.github.io/Images/Aditi.jpg",
    display: function() {
        var formattedHeaderName = HTMLheaderName.replace("%data%", bio.name);
        $("#header").append(formattedHeaderName);
        var formattedRole = HTMLheaderRole.replace("%data%", bio.role);
        $("#header").append(formattedRole);
        var formattedEmail = HTMLemail.replace("%data%", bio.contacts.email);
        $("#topContacts").append(formattedEmail);
        var formattedGithub = HTMLgithub.replace("%data%", bio.contacts.github);
        $("#topContacts").append(formattedGithub);
        var formattedLocation = HTMLlocation.replace("%data%", bio.contacts.location);
        $("#topContacts").append(formattedLocation);
        var formattedBiopic = HTMLbioPic.replace("%data%", bio.biopic);
        $("#header").append(formattedBiopic);
        var formattedWelcomeMessage = HTMLwelcomeMsg.replace("%data%", bio.welcomeMessage);
        $("#header").append(formattedWelcomeMessage);
        $("#header").append(HTMLskillsStart);
        for (var i = 0; i < bio.skills.length; i++) {
            var formattedSkills = HTMLskills.replace("%data%", bio.skills[i]);
            $("#skills").append(formattedSkills);
        }
        $("#footerContacts").append(formattedEmail);
        $("#footerContacts").append(formattedGithub);
        $("#footerContacts").append(formattedLocation);
    }
};
bio.display();
var education = {
    schools: [{
        name: "Rungta College of Engineering & Technology,Bhilai",
        location: "Bhilai",
        degree: "BE",
        majors: ["IT"],
        dates: "22-04-2016",
        url: "http://www.dpsdurg.com/",
    }],
    onlineCourses: [{
        title: "Udacity Frontend Development Nanodegree Course",
        school: "Udacity",
        dates: "11-06-2017",
        url: "https://in.udacity.com/course/front-end-web-developer-nanodegree--nd001/"
    }],
    display: function() {
        $("#education").append(HTMLschoolStart);
        for (var i = 0; i < education.schools.length; i++) {
            var formattedschoolName = HTMLschoolName.replace("%data%", education.schools[i].name);
            $(".education-entry").append(formattedschoolName);
            var formattedschoolDegree = HTMLschoolDegree.replace("%data%", education.schools[i].degree);
            $(".education-entry").append(formattedschoolDegree);
            var formattedschoolDates = HTMLschoolDates.replace("%data%", education.schools[i].dates);
            $(".education-entryn").append(formattedschoolDates);
            var formattedschoolLocation = HTMLschoolLocation.replace("%data%", education.schools[i].location);
            $(".education-entry").append(formattedschoolLocation);
            var formattedschoolMajor = HTMLschoolMajor.replace("%data%", education.schools[i].majors);
            $(".education-entry").append(formattedschoolMajor);
        }
        $("#education").append(HTMLonlineClasses);
        for (var j = 0; j < education.onlineCourses.length; j++) {
            var formattedonlineTitle = HTMLonlineTitle.replace("%data%", education.onlineCourses[j].title);
            $(".education-entry").append(formattedonlineTitle);
            var formattedonlineSchool = HTMLonlineSchool.replace("%data%", education.onlineCourses[j].school);
            $(".education-entry").append(formattedonlineSchool);
            var formattedonlineDates = HTMLonlineDates.replace("%data%", education.onlineCourses[j].dates);
            $(".education-entry").append(formattedonlineDates);
            var formattedonlineURL = HTMLonlineURL.replace("%data%", education.onlineCourses[j].url);
            $(".education-entry").append(formattedonlineURL);
        }
    }
};
education.display();
var work = {
    jobs: [{
        employer: "Accenture",
        title: "Associate Software Developer",
        location: "Bangalore",
        dates: "In Progress",
        description: "Working here since one year",
    }],
    display: function() {
        $("#workExperience").append(HTMLworkStart);
        for (var i = 0; i < work.jobs.length; i++) {
            var formattedworkEmployer = HTMLworkEmployer.replace("%data%", work.jobs[i].employer);
            $(".work-entry").append(formattedworkEmployer);
            var formattedworkTitle = HTMLworkTitle.replace("%data%", work.jobs[i].title);
            $(".work-entry").append(formattedworkTitle);
            var formattedworkDates = HTMLworkDates.replace("%data%", work.jobs[i].dates);
            $(".work-entry").append(formattedworkDates);
            var formattedworkLocation = HTMLworkLocation.replace("%data%", work.jobs[i].location);
            $(".work-entry").append(formattedworkLocation);
            var formattedworkDescription = HTMLworkDescription.replace("%data%", work.jobs[i].description);
            $(".work-entry").append(formattedworkDescription);
        }
    }
};
work.display();
var projects = {
    projects: [{
        title: "Portfolio",
        dates: "16-04-2017",
        description: "Online Portfolio",
        images: ["images/portfolio-2.png"],
    }, {
        title: "Classic Arcade Game",
        dates: "06-05-2017",
        description: "JavaScript Game",
        images: ["images/arcade-game.png"],
    }, {
        title: "Touressence",
        dates: "06-12-2016",
        description: "Travel Website",
        images: ["images/touressence.png"],
    }, {
        title: "Neighborhood Map",
        dates: "26-06-2017",
        description: "A single-page web application, built using the Knockout framework, that displays a Google Map of an area and various points of interest. Users can search all included landmarks and, when selected, additional information about a landmark is presented from the FourSquare and Wikipedia APIs.",
        images: ["images/neighborhood-map.png"],
    }],
    display: function() {
        $("#projects").append(HTMLprojectStart);
        for (var i = 0; i < projects.projects.length; i++) {
            var formattedprojectTitle = HTMLprojectTitle.replace("%data%", projects.projects[i].title);
            $(".project-entry").append(formattedprojectTitle);
            var formattedprojectDates = HTMLprojectDates.replace("%data%", projects.projects[i].dates);
            $(".project-entry").append(formattedprojectDates);
            var formattedprojectDescription = HTMLprojectDescription.replace("%data%", projects.projects[i].description);
            $(".project-entry").append(formattedprojectDescription);
            for (var j = 0; j < projects.projects[i].images.length; j++) {
                var formattedprojectImage = HTMLprojectImage.replace("%data%", projects.projects[i].images[j]);
                $(".project-entry").append(formattedprojectImage);
            }
        }
    }
};
projects.display();
 $("#mapDiv").append(googleMap);
