angular.module('viewAndUpload', []).controller('viewAndUploadCtrl', viewAndUploadCtrl);
viewAndUploadCtrl.$inject = ['$scope'];
function viewAndUploadCtrl($scope) {
    $scope.tabsList = [
        {
            title: 'Uploaded by Clinic',
            isCompleted: false
        },
        {
            title: 'Uploaded by Me',
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
        {
            pdf: '1000061.pdf',
            status: "APPROVED",
            icon: "check", // Example icon class or file path
            timestamp: "12/03/20204 09:15 AM",
        },
        {
            pdf: '1000061.pdf',
            status: "APPROVED",
            icon: "check", // Example icon class or file path
            timestamp: "12/03/20204 09:15 AM",
        },
        {
            pdf: '1000061.pdf',
            status: "APPROVED",
            icon: "check", // Example icon class or file path
            timestamp: "12/03/20204 09:15 AM",
        },
    ]



    $scope.activeTab = 0;
    $scope.activeTabDropdown = '0';
    $scope.portalNextAndEditBtnBindShowHide = false;
    $scope.portalBackAndCancelBtnBind = 'Close';
    $scope.portalNextAndEditBtnBind = 'Next';

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
                break;
            case 1:
                $scope.portalNextAndEditBtnBindShowHide = true;
                break;
        }
    };



    // State variable to track if dialog is open
    $scope.isDialogOpen = false;
    $scope.isDeclinedReasonDialogOpen = false;
    $scope.isTherapyInfoDialogOpen = false;
    $scope.isDeleteDocDialogOpen = false;

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


    $scope.portalCommonBackClick = function () {
        history.go(-1)
    }
    $scope.portalCommonCancelClick = function () {
        window.location.href = '../index.html';
    }
    $scope.searchSurveyTherapyInfoEasyFormName = function () {
        window.location.href = './suryveyFormsTherapyInfo.html';
    }
    $scope.viewAndUploadDeleteDocClick = function(){
        $scope.isDeleteDocDialogOpen = !$scope.isDeleteDocDialogOpen;
    }

    $scope.options = [
        "Luz Saude Cerveira"
        // "Pending CoSign Documents"
    ];

    $scope.selectedOption = $scope.options[0];
    $scope.viewAndUploadingDocsView = true;

    $scope.viewAndUploadDocsPageClick = function(){
        $scope.viewAndUploadingDocsView = !$scope.viewAndUploadingDocsView;
    }
};