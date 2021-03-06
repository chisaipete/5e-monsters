"use strict";

define(["scripts/constants"], function (constants) {
	return {
		url: "/account",
		templateUrl: "modules/account/account.html?" + constants.VERSION,
		controller: function ($scope, $state, account, actionQueue, util) {
			window.scope = $scope;

			$scope.partial = util.partialFactory("modules/account/partials/");

			$scope.account = account;

			$scope.login = function (how) {
				account.login({
					with: how,
					callback: function (error, authData) {
						if (account.loginProvider) {
							actionQueue.next($state);
						}
					}
				});
			};
		},
	};
});
