const folderTree = {
  path: "./bdd/features",
  name: "features",
  children: [
    {
      path: "bdd/features/adt-migration",
      name: "adt-migration",
      children: [
        {
          path: "bdd/features/adt-migration/adtPostValidation.feature",
          name: "adtPostValidation.feature",
          type: "file",
        },
        {
          path: "bdd/features/adt-migration/cloneAdtCustomer.feature",
          name: "cloneAdtCustomer.feature",
          type: "file",
        },
        {
          path: "bdd/features/adt-migration/createAdtAddress.feature",
          name: "createAdtAddress.feature",
          type: "file",
        },
        {
          path: "bdd/features/adt-migration/dasd.feature",
          name: "dasd.feature",
          type: "file",
        },
      ],
      type: "directory",
    },
    {
      path: "bdd/features/api-gw-event-mngmt",
      name: "api-gw-event-mngmt",
      children: [
        {
          path: "bdd/features/api-gw-event-mngmt/platform",
          name: "platform",
          children: [
            {
              path: "bdd/features/api-gw-event-mngmt/platform/testingPlatform.feature",
              name: "testingPlatform.feature",
              type: "file",
            },
          ],
          type: "directory",
        },
        {
          path: "bdd/features/api-gw-event-mngmt/provider",
          name: "provider",
          children: [
            {
              path: "bdd/features/api-gw-event-mngmt/provider/providerInfo.feature",
              name: "providerInfo.feature",
              type: "file",
            },
            {
              path: "bdd/features/api-gw-event-mngmt/provider/testingProvider.feature",
              name: "testingProvider.feature",
              type: "file",
            },
          ],
          type: "directory",
        },
      ],
      type: "directory",
    },
    {
      path: "bdd/features/migration-keyword.feature",
      name: "migration-keyword.feature",
      type: "file",
    },
    { path: "bdd/features/prl1.feature", name: "prl1.feature", type: "file" },
    {
      path: "bdd/features/sfsdf",
      name: "sfsdf",
      children: [],
      type: "directory",
    },
    {
      path: "bdd/features/templates",
      name: "templates",
      children: [
        {
          path: "bdd/features/templates/basic.feature",
          name: "basic.feature",
          type: "file",
        },
      ],
      type: "directory",
    },
    {
      path: "bdd/features/test",
      name: "test",
      children: [],
      type: "directory",
    },
  ],
  type: "directory",
};

console.log(folderTree.children[0].children[0].path);
