angular.module('App').controller(
  'DomainDnsManagementCtrl',
  class DomainDnsManagementCtrl {
    constructor($scope, Domain) {
      this.$scope = $scope;
      this.Domain = Domain;
    }

    $onInit() {
      this.dnsStatus = angular.copy(this.$scope.currentActionData.dnsStatus);
      this.domain = angular.copy(this.$scope.currentActionData.domain);
      this.nameServers = angular.copy(this.$scope.currentActionData.nameServers);

      this.hasZone = false;
      this.hideButtonConfirm = !(
        this.dnsStatus.isOk && this.dnsStatus.isHosted
      );
      this.loading = true;

      this.$scope.submit = () => this.submit();

      this.Domain.getZones()
        .then((zones) => {
          this.hasZone = _.includes(zones, this.domain.name);
        })
        .finally(() => {
          this.loading = false;
        });
    }

    submit() {
      if (this.hasZone) {
        this.$scope.setAction('dns/lock/domain-dns-lock', false);
      } else {
        this.$scope.setAction(
          'zone/activate/domain-zone-activate',
          this.domain,
        );
      }
    }
  },
);
