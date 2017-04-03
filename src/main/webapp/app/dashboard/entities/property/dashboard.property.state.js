(function() {
    'use strict';

    angular
        .module('assessoriaTorrellesApp')
        .config(stateConfig);

    stateConfig.$inject = ['$stateProvider'];

    function stateConfig($stateProvider) {
        $stateProvider
        .state('dashboard-property', {
            parent: 'dashboard-entity',
            url: '/dashboard/property?page&sort&search',
            data: {
                authorities: ['ROLE_USER'],
                css: [
                    'content/css/bootstrap-wysihtml5/bootstrap3-wysihtml5.css',
                    {
                        name: 'wysihtml',
                        href: 'content/css/bootstrap-wysihtml5/bootstrap3-wysihtml5.css'
                    },
                    'content/css/AdminLTE.css',
                    {
                        name: 'dashboard',
                        href: 'content/css/AdminLTE.css'
                    },
                    'content/css/skin-green.min.css',
                    {
                        name: 'dashboard-skin',
                        href: 'content/css/skin-green.min.css'
                    },
                    'content/plugins/iCheck/all.css',
                    {
                        name: 'iCheck',
                        href: 'content/plugins/iCheck/all.css'
                    }
                ],
                pageTitle: 'assessoriaTorrellesApp.property.home.title'
            },
            ncyBreadcrumb: {
                label: 'Property'
            },
            views: {
                'content@': {
                    templateUrl: 'app/dashboard/entities/property/dashboard.property-new.html',
                    controller: 'PropertyController',
                    controllerAs: 'vm'
                }
            },
            params: {
                page: {
                    value: '1',
                    squash: true
                },
                sort: {
                    value: 'id,asc',
                    squash: true
                },
                search: null
            },
            resolve: {
                pagingParams: ['$stateParams', 'PaginationUtil', function ($stateParams, PaginationUtil) {
                    return {
                        page: PaginationUtil.parsePage($stateParams.page),
                        sort: $stateParams.sort,
                        predicate: PaginationUtil.parsePredicate($stateParams.sort),
                        ascending: PaginationUtil.parseAscending($stateParams.sort),
                        search: $stateParams.search
                    };
                }],
                translatePartialLoader: ['$translate', '$translatePartialLoader', function ($translate, $translatePartialLoader) {
                    $translatePartialLoader.addPart('property');
                    $translatePartialLoader.addPart('location');
                    $translatePartialLoader.addPart('buildingType');
                    $translatePartialLoader.addPart('serviceType');
                    $translatePartialLoader.addPart('global');
                    return $translate.refresh();
                }]
            }
        }).state('dashboard-property.new', {
            parent: 'dashboard-property',
            url: '/new',
            data: {
                authorities: ['ROLE_USER']
            },
            views: {
                'content@': {
                    templateUrl: 'app/dashboard/entities/property/dashboard.property-new.html',
                    controller: 'locationPropertyController',
                    controllerAs: 'vm'
                }
            },
            resolve: {
                propertyEntity: function () {
                    return {
                        name: null,
                        price: null,
                        description: null,
                        buildingType: null,
                        serviceType: null,
                        ref: null,
                        visible: null,
                        sold: null,
                        terrace: null,
                        m2: null,
                        numberBedroom: null,
                        elevator: null,
                        furnished: null,
                        pool: null,
                        garage: null,
                        numberWc: null,
                        ac: null,
                        id: null
                    };
                },
                locationEntity: function () {
                    return {
                        ref: null,
                        province: null,
                        town: null,
                        typeOfRoad: null,
                        nameRoad: null,
                        number: null,
                        apartment: null,
                        building: null,
                        door: null,
                        stair: null,
                        urlgmaps: null,
                        latitude: null,
                        longitude: null,
                        id: null
                    };
                }
            }
            // onEnter: ['$stateParams', '$state', '$uibModal', function($stateParams, $state, $uibModal) {
            //     $uibModal.open({
            //         templateUrl: 'app/entities/property/dashboard.property-new.html',
            //         controller: 'PropertyDialogController',
            //         controllerAs: 'vm',
            //         backdrop: 'static',
            //         size: 'lg',
            //         resolve: {
            //             entity: function () {
            //                 return {
            //                     name: null,
            //                     price: null,
            //                     description: null,
            //                     buildingType: null,
            //                     serviceType: null,
            //                     ref: null,
            //                     visible: null,
            //                     sold: null,
            //                     terrace: null,
            //                     m2: null,
            //                     numberBedroom: null,
            //                     elevator: null,
            //                     furnished: null,
            //                     pool: null,
            //                     garage: null,
            //                     numberWc: null,
            //                     ac: null,
            //                     id: null
            //                 };
            //             }
            //         }
            //     }).result.then(function() {
            //         $state.go('property', null, { reload: 'property' });
            //     }, function() {
            //         $state.go('property');
            //     });
            // }]
        }).state('dashboard-properties', {
                parent: 'dashboard-entity',
                url: '/dashboard/properties?page&sort&search',
                data: {
                    authorities: ['ROLE_USER'],
                    css: [
                        'content/css/bootstrap-wysihtml5/bootstrap3-wysihtml5.css',
                        {
                            name: 'wysihtml',
                            href: 'content/css/bootstrap-wysihtml5/bootstrap3-wysihtml5.css'
                        },
                        'content/css/AdminLTE.css',
                        {
                            name: 'dashboard',
                            href: 'content/css/AdminLTE.css'
                        },
                        'content/css/skin-green.min.css',
                        {
                            name: 'dashboard-skin',
                            href: 'content/css/skin-green.min.css'
                        }
                    ],
                    pageTitle: 'assessoriaTorrellesApp.property.home.title'
                },
                ncyBreadcrumb: {
                    label: 'Properties list'
                },
                views: {
                    'content@': {
                        templateUrl: 'app/dashboard/entities/property/dashboard.properties.html',
                        controller: 'PropertyController',
                        controllerAs: 'vm'
                    }
                },
                params: {
                    page: {
                        value: '1',
                        squash: true
                    },
                    sort: {
                        value: 'id,asc',
                        squash: true
                    },
                    search: null
                },
                resolve: {
                    pagingParams: ['$stateParams', 'PaginationUtil', function ($stateParams, PaginationUtil) {
                        return {
                            page: PaginationUtil.parsePage($stateParams.page),
                            sort: $stateParams.sort,
                            predicate: PaginationUtil.parsePredicate($stateParams.sort),
                            ascending: PaginationUtil.parseAscending($stateParams.sort),
                            search: $stateParams.search
                        };
                    }],
                    translatePartialLoader: ['$translate', '$translatePartialLoader', function ($translate, $translatePartialLoader) {
                        $translatePartialLoader.addPart('property');
                        $translatePartialLoader.addPart('location');
                        $translatePartialLoader.addPart('buildingType');
                        $translatePartialLoader.addPart('serviceType');
                        $translatePartialLoader.addPart('global');
                        return $translate.refresh();
                    }]
                }
            });
        /*.state('property-detail', {
            parent: 'entity',
            url: '/property/{id}',
            data: {
                authorities: [],
                pageTitle: 'assessoriaTorrellesApp.property.detail.title'
            },
            views: {
                'content@': {
                    templateUrl: 'app/entities/property/property-detail.html',
                    controller: 'PropertyDetailController',
                    controllerAs: 'vm'
                }
            },
            resolve: {
                translatePartialLoader: ['$translate', '$translatePartialLoader', function ($translate, $translatePartialLoader) {
                    $translatePartialLoader.addPart('property');
                    $translatePartialLoader.addPart('buildingType');
                    $translatePartialLoader.addPart('serviceType');
                    return $translate.refresh();
                }],
                entity: ['$stateParams', 'Property', function($stateParams, Property) {
                    return Property.get({id : $stateParams.id}).$promise;
                }],
                previousState: ["$state", function ($state) {
                    var currentStateData = {
                        name: $state.current.name || 'property',
                        params: $state.params,
                        url: $state.href($state.current.name, $state.params)
                    };
                    return currentStateData;
                }]
            }
        })
        .state('property-detail.edit', {
            parent: 'property-detail',
            url: '/detail/edit',
            data: {
                authorities: ['ROLE_USER']
            },
            onEnter: ['$stateParams', '$state', '$uibModal', function($stateParams, $state, $uibModal) {
                $uibModal.open({
                    templateUrl: 'app/entities/property/dashboard.property-new.html',
                    controller: 'PropertyDialogController',
                    controllerAs: 'vm',
                    backdrop: 'static',
                    size: 'lg',
                    resolve: {
                        entity: ['Property', function(Property) {
                            return Property.get({id : $stateParams.id}).$promise;
                        }]
                    }
                }).result.then(function() {
                    $state.go('^', {}, { reload: false });
                }, function() {
                    $state.go('^');
                });
            }]
        })
        .state('property.new', {
            parent: 'property',
            url: '/new',
            data: {
                authorities: ['ROLE_USER']
            },
            onEnter: ['$stateParams', '$state', '$uibModal', function($stateParams, $state, $uibModal) {
                $uibModal.open({
                    templateUrl: 'app/entities/property/dashboard.property-new.html',
                    controller: 'PropertyDialogController',
                    controllerAs: 'vm',
                    backdrop: 'static',
                    size: 'lg',
                    resolve: {
                        entity: function () {
                            return {
                                name: null,
                                price: null,
                                description: null,
                                buildingType: null,
                                serviceType: null,
                                ref: null,
                                visible: null,
                                sold: null,
                                terrace: null,
                                m2: null,
                                numberBedroom: null,
                                elevator: null,
                                furnished: null,
                                pool: null,
                                garage: null,
                                numberWc: null,
                                ac: null,
                                id: null
                            };
                        }
                    }
                }).result.then(function() {
                    $state.go('property', null, { reload: 'property' });
                }, function() {
                    $state.go('property');
                });
            }]
        })
        .state('property.edit', {
            parent: 'property',
            url: '/{id}/edit',
            data: {
                authorities: ['ROLE_USER']
            },
            onEnter: ['$stateParams', '$state', '$uibModal', function($stateParams, $state, $uibModal) {
                $uibModal.open({
                    templateUrl: 'app/entities/property/dashboard.property-new.html',
                    controller: 'PropertyDialogController',
                    controllerAs: 'vm',
                    backdrop: 'static',
                    size: 'lg',
                    resolve: {
                        entity: ['Property', function(Property) {
                            return Property.get({id : $stateParams.id}).$promise;
                        }]
                    }
                }).result.then(function() {
                    $state.go('property', null, { reload: 'property' });
                }, function() {
                    $state.go('^');
                });
            }]
        })
        .state('property.delete', {
            parent: 'property',
            url: '/{id}/delete',
            data: {
                authorities: ['ROLE_USER']
            },
            onEnter: ['$stateParams', '$state', '$uibModal', function($stateParams, $state, $uibModal) {
                $uibModal.open({
                    templateUrl: 'app/entities/property/property-delete-dialog.html',
                    controller: 'PropertyDeleteController',
                    controllerAs: 'vm',
                    size: 'md',
                    resolve: {
                        entity: ['Property', function(Property) {
                            return Property.get({id : $stateParams.id}).$promise;
                        }]
                    }
                }).result.then(function() {
                    $state.go('property', null, { reload: 'property' });
                }, function() {
                    $state.go('^');
                });
            }]
        });*/
    }

})();
