
angular.module("myApp", []);

angular.module("myApp").controller("myController", function($scope, $compile, ContentService, calendarService) {
    
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
        
        let url = `${$scope.baseUrl}/${contentUrl}`;

        if($scope.baseUrl.includes("github")){
            url = `${$scope.baseUrl}/portal-prototype/${contentUrl}`
        }

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
            title: 'Service',
            icon: 'ri-service-line',
            isCompleted: false    
        },
        {
            title: 'Visit Type',
            icon: 'ri-video-on-line',
            isCompleted: false            
        },
        {
            title: 'Facility',
            icon: 'ri-building-line',
            isCompleted: false            
        },

        {
            title: 'Provider',
            icon: 'ri-stethoscope-line',
            isCompleted: false            
        },
        {
            title: 'Time',
            icon: 'ri-time-line',
            isCompleted: false,            
        }
    ];

    // Set default selected tab
    $scope.selectedTab = 0;
    $scope.currentStep = 0;

    // Function to switch tabs
    $scope.selectTab = function(index) {        
        $scope.selectedTab = index;
        $scope.currentStep++;
        $scope.tabs[index-1].isCompleted = true;
    };

    $scope.editTab = function(tab) {
        if(!tab.isCompleted) {
            return;
        }
        $scope.selectedTab = $scope.tabs.indexOf(tab);
    }

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
        let locations =  angular.element(document.querySelectorAll('.facility-list > a'));
        $scope.selectTab(3);

        angular.forEach(locations, function(location) {
            location.classList.remove('selected');
            let address = location.querySelectorAll('span')[0].innerHTML;
            let matchFacility = address.includes(facility.substring(0,4));
            
            if(matchFacility){
                location.classList.add('selected');
            }
        })

    };
    $scope.selectProvider = function(provider) {
        $scope.provider = provider;
        $scope.selectTab(4);
        
        let providers =  angular.element(document.querySelectorAll('.provider-list > a'));

        angular.forEach(providers, function(p) {
            p.classList.remove('selected');
            let providerName = p.querySelectorAll('span')[0].innerHTML;
            let matchProvider = providerName.includes(provider);
            console.log(matchProvider)
            if(matchProvider){
                p.classList.add('selected');
            }
        })

    };

    $scope.selectTime = function(time) {
        let buttons  = angular.element(document.querySelectorAll('.timeslots > button'));
        
        $scope.time = time;
        $scope.selectTab(5);
        angular.forEach(buttons, function(button) {
            button.classList.remove('selected-time');
            if(button.innerHTML === time){
                button.classList.add('selected-time');
            }
        })

        $scope.submitAppt();
        
    };

    $scope.submitAppt = function() {
        $scope.newAppt.service = $scope.service;
        $scope.newAppt.visitType = $scope.visitType;
        $scope.newAppt.facility = $scope.facility;
        $scope.newAppt.provider = $scope.provider;
        $scope.newAppt.date = $scope.selectedDate.date;
        $scope.newAppt.month = $scope.selectedDate.month;
        $scope.newAppt.year = $scope.selectedDate.year;
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


     // Calendar



    // Initialize basic properties
    $scope.monthNames = ['January', 'February', 'March', 'April', 'May', 'June',
        'July', 'August', 'September', 'October', 'November', 'December'];
    $scope.weekdays = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
    $scope.selectedDate = null;

    $scope.isTimeSelected = false;


    // Current date information
    var today = new Date();
    $scope.currentMonth = today.getMonth();
    $scope.currentYear = today.getFullYear();

    // Load days for the current month
    $scope.days = calendarService.getDaysInMonth($scope.currentMonth, $scope.currentYear);

    // Move to the previous month
    $scope.prevMonth = function () {
        if ($scope.currentMonth === 0) {
            $scope.currentMonth = 11;
            $scope.currentYear -= 1;
        } else {
            $scope.currentMonth -= 1;
        }
        $scope.days = calendarService.getDaysInMonth($scope.currentMonth, $scope.currentYear);
        $scope.clearSelection();
    };

    // Move to the next month
    $scope.nextMonth = function () {
        if ($scope.currentMonth === 11) {
            $scope.currentMonth = 0;
            $scope.currentYear += 1;
        } else {
            $scope.currentMonth += 1;
        }
        $scope.days = calendarService.getDaysInMonth($scope.currentMonth, $scope.currentYear);
        $scope.clearSelection();
    };

    // Select a day (single or range)
    $scope.selectDay = function (day) {
        if (!day.isDisabled) {
            $scope.selectedDate = day; // Set the selected date
        }
    };



    // Helper function to get the class for each day based on selection
    $scope.getDayClass = function (day) {
        return $scope.selectedDate && $scope.selectedDate.date === day.date ? 'selected-day' : '';
    };





});

angular.module('myApp').service('ContentService', ['$http', function($http) {    
    this.getExternalContent = function(url) {        
        return $http.get(`${url}`);
    };
}]);


angular.module('myApp').service('calendarService', function() {
    
        this.getDaysInMonth = function(month, year) {
            var date = new Date(year, month, 1);
            var days = [];
        
            // Calculate the days before the first day of the month
            var firstDay = date.getDay();
            for (var i = 0; i < firstDay; i++) {
              days.push({ date: '', isDisabled: true,  month, year , isToday: date.getDate() === new Date().getDate() });
            }
        
            // Get the actual days of the month
            while (date.getMonth() === month) {
              days.push({ date: date.getDate(), isDisabled: false, month, year , isToday: date.getDate() === new Date().getDate() });
              date.setDate(date.getDate() + 1);
            }
        
            return days;
          };   
})