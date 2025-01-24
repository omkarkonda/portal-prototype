angular.module('insuranceDetails', []).controller('insuranceDetailsCtrl', insuranceDetailsCtrl);
insuranceDetailsCtrl.$inject = ['$scope'];
function insuranceDetailsCtrl($scope) {

    $scope.insuranceData = [
        {
            badge: "PRIMARY",
            title: "Blue Cross Blue Shield of MA",
            policyNumber: "62039XY659",
            relation: "Self",
            startDate: "1/1/2024",
            endDate: "12/31/2024",
            sequence: "Primary"
        },
        {
            badge: "SECONDARY",
            title: "Aetna Health Insurance",
            policyNumber: "78562ZY541",
            relation: "Spouse",
            startDate: "2/1/2024",
            endDate: "1/31/2025",
            sequence: "Secondary"
        },
        {
            badge: "TERTIARY",
            title: "UnitedHealthcare",
            policyNumber: "98562UV321",
            relation: "Dependent",
            startDate: "3/1/2024",
            endDate: "2/28/2025",
            sequence: "Tertiary"
        }
    ];

    $scope.addInsurancePolicyModel = {
        selectRelation: 'Select Relation',
        HealthPlan: 'Health Plan Name',
        PolicyNumber: '',
        PolicyStartDate: convertISOToDate('2025-01-19T18:30:00.000Z'), // Initial date conversion
        PolicyEndDate: convertISOToDate('2025-01-19T18:30:00.000Z'), // Initial date conversion
        Comments: '', // Initial date conversion
        Insurance: 'Primary', // Initial date conversion
        PolicyStatus: 'Select Policy Status', // Initial date conversion
    };
    
    function convertISOToDate(isoDate) {
        const parsedDate = new Date(isoDate); // Renamed variable
        return parsedDate.toISOString().split('T')[0]; // Format to YYYY-MM-DD
    }
    
    $scope.selectRelationList = [
        {
            selectRelation: 'Select Relation',
        },
        {
            selectRelation: 'Self',
        },
        {
            selectRelation: 'Spouse',
        },
    ]
    $scope.healthPlanList = [
        {
            HealthPlan: 'Health Plan Name',
        },
        {
            HealthPlan: 'Health Insurance',
        },
    ]
    $scope.insuranceList = [
        {
            Insurance: 'Primary',
        },
        {
            Insurance: 'Secondary',
        },
    ]
    $scope.policyStatusList = [
        {
            PolicyStatus: 'Select Policy Status',
        },
    ]

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


    $scope.portalCommonBackClick = function () {
        window.location.href = '../index.html';
    }


    $scope.isAddInsurance = false;
    $scope.isAddInsurancePolicyClick = function(){
        $scope.isAddInsurance = !$scope.isAddInsurance;
    }
};
