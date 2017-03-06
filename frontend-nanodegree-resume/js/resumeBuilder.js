/* JavaScript objects and dislay functions */
var bio = {
    "name": "Dante Anderson",
    "role": "Boss",
    "contacts": {

        "mobile": "415-488-7818",
        "email": "dante.anderson@gmail.com",
        "github": "github.com/danteande/",
        "twitter": "Dante1",
        "location": "Novato, CA"

    },
    "welcomeMessage": "Seeking a few good Deadheads to help write some code",
    "skills": ["charm", "stealth", "project management", "coding", "web-product design"],
    "biopic": "https://media.licdn.com/mpr/mpr/shrinknp_400_400/p/3/000/0aa/3da/03897df.jpg",


    display: function() {
        var formattedName = HTMLheaderName.replace("%data%", bio.name);
        var formattedRole = HTMLheaderRole.replace("%data%", bio.role);
        $("#header").prepend(formattedRole);
        $("#header").prepend(formattedName);
        var formattedContact1 = HTMLmobile.replace("%data%", bio.contacts.mobile);
        var formattedContact2 = HTMLemail.replace("%data%", bio.contacts.email).replace("%link%", bio.contacts.email);
        var formattedContact3 = HTMLtwitter.replace("%data%", bio.contacts.twitter);
        var formattedContact4 = HTMLgithub.replace("%data%", bio.contacts.github).replace("%link%", bio.contacts.github);
        var formattedContact5 = HTMLlocation.replace("%data%", bio.contacts.location);
        var formattedContactline = formattedContact1 + formattedContact2 + formattedContact3 + formattedContact4 + formattedContact5;
        $("#topContacts").append(formattedContactline);
        $("#lets-connect").append(formattedContactline);
        var formattedPicture = HTMLbioPic.replace("%data%", bio.biopic);
        $("#topContacts").append('<div id="biopicture"></div>');
        $("#biopicture").append(formattedPicture);
        var formattedMessage = HTMLwelcomeMsg.replace("%data%", bio.welcomeMessage);
        $("#biopicture").append(formattedMessage);
        if (bio.skills.length > 0) {
            $("#biopicture").append(HTMLskillsStart);
            for (var i = 0; i < bio.skills.length; i++) {
                var formattedSkill = HTMLskills.replace("%data%", bio.skills[i]);
                $("#skills").append(formattedSkill);
            }
        }
    }
};

var education = {
    "schools": [{
        "name": "McGill University",
        "location": "Montreal, PQ",
        "degree": "Bachelor of Commerce",
        "majors": ["CompSci"],
        "dates": "1981-1984",
        "url": "http://www.mcgill.ca"
    }, {
        "name": "University of Toronto Schools",
        "location": "Toronto, ON",
        "degree": "High School Diploma",
        "majors": ["Math", "English"],
        "dates": "1975-1980",
        "url": "http://www.utschools.ca/"
    }],
    "onlineCourses": [{
            "title": "Product Design",
            "school": "Udacity",
            "date": "March, 2016-April, 2016",
            "url": "https://classroom.udacity.com/courses/ud509/"
        }, {
            "title": "Intro to Java Programming",
            "school": "Udacity",
            "date": "April, 2016-in progress",
            "url": "https://classroom.udacity.com/courses/cs046/"
        }, {
            "title": "Front-End Web Developer Nanodegree",
            "school": "Udacity",
            "date": "May, 2016-in progress",
            "url": "https://classroom.udacity.com/nanodegrees/nd001/"
        }

    ],
    display: function() {
        $.each(education.schools, function(key, value) {
            $("#education").append(HTMLschoolStart);
            var formattedSchool = HTMLschoolName.replace("%data%", education.schools[key].name);
            var formattedDate = HTMLschoolDates.replace("%data%", education.schools[key].dates);
            var formattedDegree = HTMLschoolDegree.replace("%data%", education.schools[key].degree);
            var formattedLocation = HTMLschoolLocation.replace("%data%", education.schools[key].location);
            formattedSchoolLine = formattedSchool + formattedDegree;
            formattedDateLine = formattedDate + formattedLocation;
            $(".education-entry:last").append(formattedSchoolLine);
            $(".education-entry:last").append(formattedDateLine);
            /* code to make the word major plural or single as needed */
            var formattedMajor = "";
            var majortitle = "Major";
            $.each(education.schools[key].majors, function(mkey, value) {
                formattedMajor = formattedMajor + HTMLschoolMajor.replace("%data%", education.schools[key].majors[mkey]);
            });
            if (education.schools[key].majors.length > 1)
                majortitle = "Majors";
            $(".education-entry:last").append("<br>" + majortitle + ": " + formattedMajor);
        });
        $("#education").append(HTMLonlineClasses);
        $.each(education.onlineCourses, function(okey, value) {
            var formattedTitle = HTMLonlineTitle.replace("%data%", education.onlineCourses[okey].title);
            var formattedSchool = HTMLonlineSchool.replace("%data%", education.onlineCourses[okey].school);
            formattedTitleLine = formattedTitle + formattedSchool;
            var formattedDates = HTMLonlineDates.replace("%data%", education.onlineCourses[okey].date);
            /* create text and underlying URL for course links */
            var formattedURL = HTMLonlineURL.replace("%data%", education.onlineCourses[okey].url).replace("%data1%", education.onlineCourses[okey].url);
            $(".online-entry:last").append(formattedTitleLine);
            $(".online-entry:last").append(formattedDates);
            $(".online-entry:last").append(formattedURL);
        });
    }
};

var work = {
    "jobs": [{
            "employer": "SuperUber",
            "title": "Director/Project Manager",
            "location": "San Francsico, CA",
            "dates": "July 2014-Present",
            "description": "Business and Project Management North America"
        }, {
            "employer": "Seriosity",
            "title": "General Manager and Head of Games",
            "location": "Palo Alto, CA",
            "dates": "June 2010-July 2014",
            "description": "Serious Game Development for clients including Best Buy and Whole Foods Market"
        }

    ],
    display: function() {
        jQuery("#workExperience").append(HTMLworkStart);
        work.jobs.forEach(function(job) {
            var formattedEmployer = HTMLworkEmployer.replace("%data%", job.employer);
            var formattedTitle = HTMLworkTitle.replace("%data%", job.title);
            var formattedLocation = HTMLworkLocation.replace("%data%", job.location);
            var formattedEmployerTitle = formattedEmployer + formattedTitle + formattedLocation;
            var formattedDates = HTMLworkDates.replace("%data%", job.dates);
            var formattedDescription = HTMLworkDescription.replace("%data%", job.description);
            jQuery(".work-entry:last").append(formattedEmployerTitle);
            jQuery(".work-entry:last").append(formattedDates);
            jQuery(".work-entry:last").append(formattedDescription);


        });
    }
};

var projects = {
    "projects": [{
        "title": "GDFA",
        "dates": "2014-in progress",
        "description": "Digital remix of the book, <i>Grateful Dead Family Album</i>",
        "images": ["https://static.wixstatic.com/media/f808dc_130707e49cc147b4a5d7d352f91e9b84.png/v1/fill/w_1164,h_946,al_c,usm_0.66_1.00_0.01/f808dc_130707e49cc147b4a5d7d352f91e9b84.png", "https://static.wixstatic.com/media/f808dc_319a3b6cf700405cb7e16dd63bfb6b47.png/v1/fill/w_234,h_290,al_c,usm_0.66_1.00_0.01/f808dc_319a3b6cf700405cb7e16dd63bfb6b47.png"]
    }, {
        "title": "GDFA",
        "dates": "2014-in progress",
        "description": "Digital remix of the book, <i>Grateful Dead Family Album</i>",
        "images": ["https://static.wixstatic.com/media/f808dc_130707e49cc147b4a5d7d352f91e9b84.png/v1/fill/w_1164,h_946,al_c,usm_0.66_1.00_0.01/f808dc_130707e49cc147b4a5d7d352f91e9b84.png", "https://static.wixstatic.com/media/f808dc_319a3b6cf700405cb7e16dd63bfb6b47.png/v1/fill/w_234,h_290,al_c,usm_0.66_1.00_0.01/f808dc_319a3b6cf700405cb7e16dd63bfb6b47.png"]
    }],
    display: function() {
        $.each(projects.projects, function(key, value) {
            $("#projects").append(HTMLprojectStart);
            var formattedTitle = HTMLprojectTitle.replace("%data%", projects.projects[key].title);
            var formattedDate = HTMLprojectDates.replace("%data%", projects.projects[key].dates);
            var formattedDescription = HTMLprojectDescription.replace("%data%", projects.projects[key].description);
            $(".project-entry:last").append(formattedTitle);
            $(".project-entry:last").append(formattedDate);
            $(".project-entry:last").append(formattedDescription);
            $.each(projects.projects[key].images, function(pkey, value) {
                var formattedImage = HTMLprojectImage.replace("%data%", projects.projects[key].images[pkey]);
                $(".project-entry:last").append(formattedImage);
            });
        });
    }
};

var map = {
    display: function() {
        $("#mapDiv").append(googleMap);
    }
};

bio.display();
work.display();
projects.display();
education.display();
map.display();
