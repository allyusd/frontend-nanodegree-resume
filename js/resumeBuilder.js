var bio = {
	"name": "Hong, Jian-Ching",
	"role": "Senior RD Engineer",
	"welcomeMsg": "Hi, welcome my page.",
	"bioPic": "https://secure.gravatar.com/avatar/4646193af21c6d6f9e2f313c46802fa5?s=420&d=https://a248.e.akamai.net/assets.github.com%2Fimages%2Fgravatars%2Fgravatar-user-420.png",
	"contacts": {
		"mobile": "0000-000-000",
		"email": "allyusd@yahoo.com.tw",
		"github": "allyusd",
		"twitter": "@allyusd",
		"location": "Taichung City, Taiwan"
	},
	"skills": [
		"C++", "C#", "JavaScript"
	]
}

var work = {
	"jobs": [
		{
			"employer": "Splendor Game Technology Co., Ltd.",
			"title": "Senior RD Engineer",
			"location": "Taichung City, Taiwan",
			"dates": "2010/07 - Present",
			"description": "System Development"
		}
	]
}

var project = {
	"projects": [
		{
			"title": "Lucky Diamond (SlotGame Logic)",
			"dates": "2007/07-2007/10",
			"description": "Game logic implement",
			"image": ""
		}
	]
}

var education = {
	"schools": [
		{
			"name": "National Taipei University of Technology",
			"location": "Taipei City, Taiwan",
			"degree": "B.S.",
			"major": "Computer Science and Information Engineering",
			"dates": "2004 - 2010",
			"url": "http://www.ntut.edu.tw/"
		}
	],
	"onlineCourses": [
		{
			"title": "Beginning Game Programming with C#",
			"school": "University of Colorado System",
			"dates": "2013/06-2013/09",
			"url": "https://www.coursera.org/course/gameprogramming"
		},
		{
			"title": "Startup Engineering",
			"school": "Stanford University",
			"dates": "2013/09-2013/11",
			"url": "https://www.coursera.org/course/startup"
		}
	]
}

var formattedName = HTMLheaderName.replace("%data%", bio.name);
var formattedRole = HTMLheaderRole.replace("%data%", bio.role);
var formattedmobile = HTMLmobile.replace("%data%", bio.contacts.mobile);
var formattedemail = HTMLemail.replace("%data%", bio.contacts.email);
var formattedgithub = HTMLgithub.replace("%data%", bio.contacts.github);
var formattedtwitter = HTMLtwitter.replace("%data%", bio.contacts.twitter);
var formattedlocation = HTMLlocation.replace("%data%", bio.contacts.location);
var formattedbioPic = HTMLbioPic.replace("%data%", bio.bioPic);
var formattedWelcomeMsg = HTMLWelcomeMsg.replace("%data%", bio.welcomeMsg);
var formattedskills = HTMLskills.replace("%data%", bio.skills);

var formattedworkEmployer = HTMLworkEmployer.replace("%data%", work.jobs[0].employer);
var formattedworkTitle = HTMLworkTitle.replace("%data%", work.jobs[0].title);
var formattedworkDates = HTMLworkDates.replace("%data%", work.jobs[0].dates);
var formattedworkLocation = HTMLworkLocation.replace("%data%", work.jobs[0].location);
var formattedworkDescription = HTMLworkDescription.replace("%data%", work.jobs[0].description);

var formattedprojectTitle = HTMLprojectTitle.replace("%data%", project.projects[0].title);
var formattedprojectDates = HTMLprojectDates.replace("%data%", project.projects[0].dates);
var formattedprojectDescription = HTMLprojectDescription.replace("%data%", project.projects[0].description);
var formattedprojectImage = HTMLprojectImage.replace("%data%", project.projects[0].image);

var formattedschoolName = HTMLschoolName.replace("%data%", education.schools[0].name);
var formattedschoolDegree = HTMLschoolDegree.replace("%data%", education.schools[0].degree);
var formattedschoolDates = HTMLschoolDates.replace("%data%", education.schools[0].dates);
var formattedschoolLocation = HTMLschoolLocation.replace("%data%", education.schools[0].location);
var formattedschoolMajor = HTMLschoolMajor.replace("%data%", education.schools[0].major);

var formattedonlineTitle = HTMLonlineTitle.replace("%data%", education.onlineCourses[0].title);
var formattedonlineSchool = HTMLonlineSchool.replace("%data%", education.onlineCourses[0].school);
var formattedonlineDates = HTMLonlineDates.replace("%data%", education.onlineCourses[0].dates);
var formattedonlineURL = HTMLonlineURL.replace("%data%", education.onlineCourses[0].url);
var formattedonlineTitle2 = HTMLonlineTitle.replace("%data%", education.onlineCourses[1].title);
var formattedonlineSchool2 = HTMLonlineSchool.replace("%data%", education.onlineCourses[1].school);
var formattedonlineDates2 = HTMLonlineDates.replace("%data%", education.onlineCourses[1].dates);
var formattedonlineURL2 = HTMLonlineURL.replace("%data%", education.onlineCourses[1].url);

$("#header").append(formattedName);
$("#header").append(formattedRole);
$("#header").append(formattedmobile);
$("#header").append(formattedemail);
$("#header").append(formattedgithub);
$("#header").append(formattedtwitter);
$("#header").append(formattedlocation);
$("#header").append(formattedbioPic);
$("#header").append(formattedWelcomeMsg);
$("#header").append(HTMLskillsStart);
$("#header").append(formattedskills);

$("#workExperience").append(HTMLworkStart);
$("#workExperience").append(formattedworkEmployer);
$("#workExperience").append(formattedworkTitle);
$("#workExperience").append(formattedworkDates);
$("#workExperience").append(formattedworkLocation);
$("#workExperience").append(formattedworkDescription);

$("#projects").append(HTMLprojectStart);
$("#projects").append(formattedprojectTitle);
$("#projects").append(formattedprojectDates);
$("#projects").append(formattedprojectDescription);
$("#projects").append(formattedprojectImage);

$("#education").append(HTMLschoolStart);
$("#education").append(formattedschoolName);
$("#education").append(formattedschoolDegree);
$("#education").append(formattedschoolDates);
$("#education").append(formattedschoolLocation);
$("#education").append(formattedschoolMajor);
$("#education").append(HTMLonlineClasses);
$("#education").append(formattedonlineTitle);
$("#education").append(formattedonlineSchool);
$("#education").append(formattedonlineDates);
$("#education").append(formattedonlineURL);
$("#education").append(formattedonlineTitle2);
$("#education").append(formattedonlineSchool2);
$("#education").append(formattedonlineDates2);
$("#education").append(formattedonlineURL2);