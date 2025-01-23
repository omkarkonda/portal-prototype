
angular.module('myPersonalDetails', []).controller('myPersonalDetailsCtrl', myPersonalDetailsCtrl);
myPersonalDetailsCtrl.$inject = ['$scope'];
function myPersonalDetailsCtrl($scope) {

    $scope.personalDetails = [
        {
            name: 'FIRST NAME',
            model: 'Michael', // ng-model="myPersonalDetailsFieldsFirstName"
        },
        {
            name: 'LAST NAME',
            model: 'Cotter', // ng-model="myPersonalDetailsFieldsLastName"
        },
        {
            name: 'MIDDLE NAME',
            model: '', // ng-model="myPersonalDetailsFieldsMiddleName"
        },
        {
            name: 'BIRTH SEX',
            model: 'male', // ng-model="myPersonalDetailsFieldsBirthSex"
            isDropdown: true,
            options: [
                { label: "Male", value: "male" },
                { label: "Female", value: "female" },
            ]
        },
        {
            name: 'MARITAL STATUS',
            model: 'widowed', // ng-model="myPersonalDetailsFieldsMaritalStatus"
            isDropdown: true,
            options : [
                { label: "Single", value: "single" },
                { label: "Married", value: "married" },
                { label: "Divorced", value: "divorced" },
                { label: "Widowed", value: "widowed" }
            ]
        },
        {
            name: 'CELL PHONE',
            model: '442-342-6456', // ng-model="myPersonalDetailsFieldsCellPhone"
        },
        {
            name: 'STREET',
            model: '24 Outland Road', // ng-model="myPersonalDetailsFieldsStreet"
        },
        {
            name: 'COUNTRY',
            model: 'us', // ng-model="myPersonalDetailsFieldsCountry"
            isDropdown: true,
            options : [
                { label: "US", value: "us" },
                { label: "India", value: "india" },
            ]
        },
        {
            name: 'RACE',
            model: 'asian_native', // ng-model="myPersonalDetailsFieldsRace"
            isDropdown: true,
            options : [
                { label: "Asian, Native American Indian", value: "asian_native", isCheck: true, },
                { label: "American Indian or Alaska Native", value: "american_indian", isCheck: false, },
                { label: "White", value: "white", isCheck: false, },
                { label: "Black or African American", value: "black_african", isCheck: false, },
                { label: "Native Hawaiian or Other Pacific Islander", value: "hawaiian_pacific", isCheck: false, },
                { label: "Other Race", value: "other_race", isCheck: false, }
            ],
        },
        {
            name: 'ETHNICITY',
            model: 'american', // ng-model="myPersonalDetailsFieldsEthnicity"
            isDropdown: true,
            options : [
                { label: "American", value: "american" },
                { label: "Indian", value: "indian" },
            ]
        },
        {
            name: 'PREFERRED LANGUAGE',
            model: 'spanish', // ng-model="myPersonalDetailsFieldsLanguage"
            isDropdown: true,
            options : [
                { label: "Spanish", value: "spanish" },
                { label: "Telugu", value: "telugu" },
                { label: "Hindi", value: "hindi" },
            ]
        }
    ];

    // State variable to track if dialog is open
    $scope.isDialogOpen = false;

    // Function to open the dialog
    $scope.openDialog = function () {
        $scope.isDialogOpen = true;
    };

    // Function to close the dialog
    $scope.closeDialog = function () {
        $scope.isDialogOpen = false;
    };


    $scope.portalCommonBackClick = function (isFrom) {
        window.location.href = './MyResultsAndOrder.html';
    }
    $scope.portalCommonCancelClick = function () {
        window.location.href = '../index.html';
    }


};