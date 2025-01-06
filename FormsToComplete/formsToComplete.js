angular.module('tabApp', []).controller('TabController', TabController);
TabController.$inject = ['$scope'];
function TabController($scope) {
    $scope.tabsList = [
        {
            title: 'Clinical Forms',
            icon: 'ri-building-line',
            isCompleted: false
        },
        {
            title: 'Survey Forms',
            icon: 'ri-building-line',
            isCompleted: false
        },
        {
            title: 'Forms To Cosign',
            icon: 'ri-building-line',
            isCompleted: false
        },
    ]

    $scope.listPdfData = [
        {
            pdf: '1000060.pdf',
            status: "DRAFT",
            icon: "file", // Example icon class or file path
            timestamp: "12/02/20204 07:57 PM",
        },
        {
            pdf: '1000061.pdf',
            status: "APPROVED",
            icon: "check", // Example icon class or file path
            timestamp: "12/03/20204 09:15 AM",
        },
    ]
    $scope.listData = [
        {
            id: 1000060,
            status: "DRAFT",
            icon: "file", // Example icon class or file path
            timestamp: "12/02/20204 07:57 PM",
        },
        {
            id: 1000061,
            status: "APPROVED",
            icon: "check", // Example icon class or file path
            timestamp: "12/03/20204 09:15 AM",
        },
        {
            id: 1000062,
            status: "PENDING",
            icon: "hourglass", // Example icon class or file path
            timestamp: "12/04/20204 02:45 PM",
        },
        {
            id: 1000063,
            status: "REJECTED",
            icon: "cancel", // Example icon class or file path
            timestamp: "12/05/20204 11:30 AM",
        },
        {
            id: 1000064,
            status: "IN REVIEW",
            icon: "review", // Example icon class or file path
            timestamp: "12/06/20204 05:20 PM",
        },
        {
            id: 1000065,
            status: "IN REVIEW DONE",
            icon: "review", // Example icon class or file path
            timestamp: "12/06/20204 05:20 PM",
        },
    ];
    $scope.easyFormsViewData = [
        {
            pdf: '1000060.pdf',
            status: "DRAFT",
            icon: "file", // Example icon class or file path
            timestamp: "12/02/20204 07:57 PM",
        },
    ];




    $scope.activeTab = 0;
    $scope.activeTabDropdown = '0';
    $scope.portalNextAndEditBtnBindShowHide = false;
    $scope.portalBackAndCancelBtnBind = 'Cancel';
    $scope.portalNextAndEditBtnBind = 'Edit';

    // Function to handle tab selection and button logic for both tab types
    $scope.setActiveTab = function (tab, isDropdown) {
        const activeTabValue = isDropdown ? parseInt(tab) : tab;

        $scope.activeTab = activeTabValue;
        if(isDropdown){
            $scope.activeTabDropdown = activeTabValue.toString();
        }

        switch (activeTabValue) {
            case 0:
                $scope.portalNextAndEditBtnBindShowHide = false;
                $scope.portalBackAndCancelBtnBind = 'Cancel';
                break;
            case 1:
                $scope.portalNextAndEditBtnBindShowHide = true;
                $scope.portalBackAndCancelBtnBind = 'Back';
                $scope.portalNextAndEditBtnBind = 'Edit';
                break;
            case 2:
                $scope.portalNextAndEditBtnBindShowHide = true;
                $scope.portalNextAndEditBtnBind = 'Next';
                break;
        }
    };

    // Helper function to check if a tab is active

    $scope.options = [
        "Co-Signature Required",
        "Cosigned",
        // "Pending CoSign Documents"
    ];

    $scope.selectedOption = $scope.options[0];


    // State variable to track if dialog is open
    $scope.isDialogOpen = false;
    $scope.isDeclinedReasonDialogOpen = false;
    $scope.isTherapyInfoDialogOpen = false;

    $scope.openDeclinedReasonDialog = function(){
        $scope.isDeclinedReasonDialogOpen = !$scope.isDeclinedReasonDialogOpen;
    }

    // Function to open the dialog
    $scope.openDialog = function () {
        $scope.isDialogOpen = true;
    };

    // Function to close the dialog
    $scope.closeDialog = function () {
        $scope.isDialogOpen = false;
    };

    $scope.portalCommonNextAndEditClick = function () {
        if ($scope.portalNextAndEditBtnBind == 'Next') {
            if ($scope.selectedOption == 'Co-Signature Required') {
                window.location.href = './yetToFillCosignDocs.html';
            } else if ($scope.selectedOption == 'Cosigned') {
                window.location.href = './cosignedForms.html';
            }
        }else{
            $scope.isTherapyInfoDialogOpen = !$scope.isTherapyInfoDialogOpen;
        }
    }
    $scope.portalCommonBackClick = function () {
        history.go(-1)
    }
    $scope.portalCommonCancelClick = function () {
        window.location.href = '../index.html';
    }
    $scope.searchSurveyTherapyInfoEasyFormName = function () {
        window.location.href = './suryveyFormsTherapyInfo.html';
    }

};