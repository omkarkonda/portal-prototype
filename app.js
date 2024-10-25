
angular.module("myApp", []);

angular.module("myApp").controller("myController", function($scope, $compile, ContentService, DateService) {
    
    $scope.myData = {
        "appointments": {
            "Date": {
                "month":"oct",
                "day": "30",
                "year": "2024"
            },
            "Service": "Individual Therapy Session",
            "Provider": "Amy Smith, LCSW",
            "Program":  "Couple Therapy Program",
            "Link" : "https://www.google.com/zd3erdfd"
    
        },
        "messages": [ 
            {
                "type": "alert",
                "header": "Questionnaire Due",
                "bodytext": "You have a questionnaire due before your next visit on September",
                "date": "8/28/24"
            },

            {
                "type": "message",
                "header": "Amy Smith, LCSW",
                "bodytext": "I would recommend enrolling in our group therapy session for Couple...",
                "date": "8/15/24"
            },

            {
                "type": "Front desk",
                "header": "Questionnaire Due",
                "bodytext": "You have an upcoming appointment on August 7, 2024! Please arriv...",
                "date": "8/05/24"
            }

        ],
        "insurance": {
            "HealthPlan": "Blue Cross Blue Shield of Oregon",
            "PolicyNumber": "62039CT568",
            "RelationToInsured": "Self",
            "StartDate": "1/1/2024",
            "EndDate": "12/31/2024",
            "InsuranceSequence": "Primary"
    
        },
        "bills": {
            "dueAmount": "$20"        
        }
    }
    

      // State variable to track if dialog is open
      $scope.isDialogOpen = false;

      // Function to open the dialog
      $scope.openDialog = function() {        
          $scope.isDialogOpen = true;
      };

      // Function to close the dialog
      $scope.closeDialog = function() {
          $scope.isDialogOpen = false;
      };

      $scope.baseUrl = window.location.origin;

      $scope.replaceContent = function(elementId, contentUrl){
        
        let url = `${$scope.baseUrl}/${contentUrl}`
        let targetElement = document.getElementById(elementId);

        ContentService.getExternalContent(url).then(function(response) {

            let compiledContent =  $compile(response.data)($scope);
            
            angular.element(targetElement).empty();
            angular.element(targetElement).append(compiledContent);        

        }).catch(function(error) {
            console.error('Error loading content:', error);
        });
      }

      // Book appointment tabs
      $scope.tabs = [
        {
            title: 'service',
            icon: 'ri-service-line'
            
        },
        {
            title: 'visit type',
            icon: 'ri-video-on-line'
            
        },
        {
            title: 'facility',
            icon: 'ri-building-line'
            
        },

        {
            title: 'provider',
            icon: 'ri-stethoscope-line'
            
        },
        {
            title: 'time',
            icon: 'ri-time-line'
            
        }
    ];

    // Set default selected tab
    $scope.selectedTab = 0;

    // Function to switch tabs
    $scope.selectTab = function(index) {
        $scope.selectedTab = index;
    };

    $scope.isEmergency = false;
    $scope.isNotEmergency = false;
    

    $scope.emergencyCheck = function() {        
        $scope.isEmergency = true;
        $scope.isNotEmergency = false;
    };
    $scope.emergencyCheckNo = function(bool) {        
        $scope.isEmergency = false;
        $scope.isNotEmergency = true;
    };


    $scope.allDays = DateService.getNext60Days();
    $scope.weekends = DateService.filterWeekends($scope.allDays);

    $scope.isFirstDayofTheMonth = function(day) {
        
        return day.date === 1;
    };
    
    $scope.selectDate = function(day) {
        $scope.isDateSelected = true;
        $scope.selctedDay = day;        
    };


    $scope.newAppt = {
        service: "",
        visitType: "",
        facility: "",
        provider: "",
        date: "",
        month: "",
        year: "",
        time: ""
    }


    $scope.service = "";
    $scope.visitType = "";
    $scope.facility = "";
    $scope.provider = "";
    $scope.time = "";

    $scope.selectService = function(service) {
        $scope.service = service;
        $scope.selectTab(1);
    };
    $scope.selectVisitType = function(visitType) {
        $scope.visitType = visitType;
        $scope.selectTab(2);
    };
    $scope.selectFacility = function(facility) {
        $scope.facility = facility;
        $scope.selectTab(3);
    };
    $scope.selectProvider = function(provider) {
        $scope.provider = provider;
        $scope.selectTab(4);
    };

    $scope.selectTime = function(time) {
        $scope.time = time;
    };

    $scope.submitAppt = function() {
        $scope.newAppt.service = $scope.service;
        $scope.newAppt.visitType = $scope.visitType;
        $scope.newAppt.facility = $scope.facility;
        $scope.newAppt.provider = $scope.provider;
        $scope.newAppt.date = $scope.selctedDay.date;
        $scope.newAppt.month = $scope.selctedDay.month;
        $scope.newAppt.year = $scope.selctedDay.year;
        $scope.newAppt.time = $scope.time;

    }

    $scope.modifyAppt = function() {
        $scope.newAppt.service = "";
        $scope.newAppt.visitType = "";
        $scope.newAppt.facility = "";
        $scope.newAppt.provider = "";
        $scope.newAppt.date = "";
        $scope.newAppt.month = "";
        $scope.newAppt.year = "";
        $scope.newAppt.time = "";
        $scope.selectTab(0);
    }



});

angular.module('myApp').service('ContentService', ['$http', function($http) {    
    this.getExternalContent = function(url) {        
        return $http.get(`${url}`);
    };
}]);


angular.module('myApp').service('DateService', function() {
    this.getNext60Days = function() {
        const days = [];
        const weekDays = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
        const months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 
                       'August', 'September', 'October', 'November', 'December'];
        
        const currentDate = new Date();
        
        for(let i = 0; i < 60; i++) {
            const nextDate = new Date(currentDate);
            nextDate.setDate(currentDate.getDate() + i);
            
            const dateObj = {
                date: nextDate.getDate(),
                month: months[nextDate.getMonth()],
                year: nextDate.getFullYear(),
                weekDay: weekDays[nextDate.getDay()],
                shortWeekDay:weekDays[nextDate.getDay()].substring(0, 3).toUpperCase(),
                formattedDate: nextDate.toISOString().split('T')[0],
                dayOfYear: Math.floor((nextDate - new Date(nextDate.getFullYear(), 0, 0)) / (1000 * 60 * 60 * 24))
            };
            
            days.push(dateObj);
        }
        
        return days;
    };
    
    this.filterWeekends = function(days) {
        return days.filter(day => 
            day.weekDay === 'Saturday' || day.weekDay === 'Sunday'
        );
    };

  
    
    this.groupByMonth = function(days) {
        return days.reduce((acc, day) => {
            if (!acc[day.month]) {
                acc[day.month] = [];
            }
            acc[day.month].push(day);
            return acc;
        }, {});
    };
})