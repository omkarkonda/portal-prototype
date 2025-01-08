angular.module('myResultsAndOrder', []).controller('myResultsAndOrderCtrl', myResultsAndOrderCtrl);
myResultsAndOrderCtrl.$inject = ['$scope'];
function myResultsAndOrderCtrl($scope) {
    $scope.tabsList = [
        {
            title: 'Lab Results',
            isCompleted: false
        },
        {
            title: 'Imaging Results',
            isCompleted: false
        },
        {
            title: 'Orders',
            isCompleted: false
        },
    ]

    $scope.labsListData = [
        {
            title: '09/23/2024 - CBC WITH DIFF.',
            status: 'DRAFT'
        },
        {
            title: '09/23/2024 - COMPREHENSIVE METABOLIC',
        },
        {
            title: '09/23/2024 - LIPID PANEL',
        },
        {
            title: '09/23/2024 - URINALYSIS',
        },
    ]
    let labOrderListData = [
        {
            title: 'Lab Orders - 10/14/2024',
            status: 'DRAFT'
        },
        {
            title: 'Lab Orders - 09/30/2024',
        },
        {
            title: 'Lab Orders - 10/04/2024',
        },
        {
            title: 'Lab Orders - 10/09/2024',
        },
    ]
    let imagingOrderListData = [
        {
            title: 'Xray Orders - 10/14/2024',
            status: 'DRAFT'
        },
        {
            title: 'Xray Orders - 09/30/2024',
        },
        {
            title: 'Xray Orders - 10/04/2024',
        },
        {
            title: 'Xray Orders - 10/09/2024',
        },
    ]

    $scope.myResultsAndOrdersIconShowHide = true;
    $scope.myResultsCommonList = labOrderListData;
    $scope.myResultsAndOrderDropdownChange = function(){
        if($scope.ordersListOption == 'Lab Orders'){
            $scope.myResultsAndOrdersIconShowHide = true;
            $scope.myResultsCommonList = labOrderListData;
        }else{
            $scope.myResultsAndOrdersIconShowHide = false;
            $scope.myResultsCommonList = imagingOrderListData;
        }
    }


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
                $scope.viewAndUploadingDocsView = true;
                break;
            case 1:
                $scope.portalNextAndEditBtnBindShowHide = true;
                break;
        }
    };



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
    $scope.myResultAndOrderDetailsClick = function (route) {
        if(route == 1){
            window.location.href = './MyResultsAndOrderDetails.html';
        }else if(route == 2){
            window.location.href = './MyResultsImagingOrderDetails.html';
        }else if (route == 3){
            if($scope.ordersListOption == 'Lab Orders'){
                window.location.href = './myResultsOrderLabs.html';
            }else{
                window.location.href = './myResultsImagingOrdersLabs.html';
            }
        }
    }
    


    $scope.options = [
        "Baby Side Lab",
        "AMMON Lab",
        "Adair Family Med Center",
    ];
    $scope.ordersList = [
        "Lab Orders",
        "Imaging Orders",
    ];

    $scope.selectedOption = $scope.options[0];
    $scope.ordersListOption = $scope.ordersList[0];

};