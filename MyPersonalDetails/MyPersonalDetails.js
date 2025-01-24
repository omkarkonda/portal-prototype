
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
            model: 'Male', // ng-model="myPersonalDetailsFieldsBirthSex"
            isDropdown: true,
            options: [
                { label: "Male", value: "Male" },
                { label: "Female", value: "Female" },
            ]
        },
        {
            name: 'MARITAL STATUS',
            model: 'Widowed', // ng-model="myPersonalDetailsFieldsMaritalStatus"
            isDropdown: true,
            options : [
                { label: "Single", value: "Single" },
                { label: "Married", value: "Married" },
                { label: "Divorced", value: "Divorced" },
                { label: "Widowed", value: "Widowed" }
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
            model: 'US', // ng-model="myPersonalDetailsFieldsCountry"
            isDropdown: true,
            options : [
                { label: "US", value: "US" },
                { label: "India", value: "India" },
            ]
        },
        {
            name: 'RACE',
            model: 'Asian, Native American Indian', // ng-model="myPersonalDetailsFieldsRace"
            isDropdown: true,
            options : [
                { label: "Asian, Native American Indian", value: "Asian, Native American Indian", isCheck: true, },
                { label: "American Indian or Alaska Native", value: "american_indian", isCheck: false, },
                { label: "White", value: "white", isCheck: false, },
                { label: "Black or African American", value: "black_african", isCheck: false, },
                { label: "Native Hawaiian or Other Pacific Islander", value: "hawaiian_pacific", isCheck: false, },
                { label: "Other Race", value: "other_race", isCheck: false, }
            ],
        },
        {
            name: 'ETHNICITY',
            model: 'American', // ng-model="myPersonalDetailsFieldsEthnicity"
            isDropdown: true,
            options : [
                { label: "American", value: "American" },
                { label: "Indian", value: "Indian" },
            ]
        },
        {
            name: 'PREFERRED LANGUAGE',
            model: 'Spanish', // ng-model="myPersonalDetailsFieldsLanguage"
            isDropdown: true,
            options : [
                { label: "Spanish", value: "Spanish" },
                { label: "Telugu", value: "Telugu" },
                { label: "Hindi", value: "Hindi" },
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
        window.location.href = './MyPersonalDetails.html';
    }
    $scope.portalCommonCancelClick = function () {
        window.location.href = '../index.html';
    }


};