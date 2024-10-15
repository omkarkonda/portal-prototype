
angular.module("myApp", []);

angular.module("myApp").controller("myController", function($scope, $http) {
    $scope.message = "Hello World!";
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
                "bodytext": "I would recommend enrolling in our group therapy session for Couple Therapy Program",
                "date": "8/15/24"
            },

            {
                "type": "Front desk",
                "header": "Questionnaire Due",
                "bodytext": "You have an upcoming appointment on August 7, 2024! Please arriv",
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
    

    // $scope.getData = async function() {
    //     try {
    //         const response = await $http.get('data.json');
    //         if (response && response.data) {
    //             return response.data;
    //         }
    //     } catch (error) {
    //         console.log("Error retrieving data: ", error);
    //     }
    // }

    //  $scope.getData().then(function(data) {        
    //     $scope.myData = data;              
    //     $scope.$apply();
    //   });
         
});
