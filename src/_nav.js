export default {
  items: [
    {
      name: "Dashboard",
      url: "/dashboard",
      icon: "icon-dashboard"
    },
    // {
    //   title: true,
    //   name: 'Theme',
    //   wrapper: {            // optional wrapper object
    //     element: '',        // required valid HTML5 element tag
    //     attributes: {}        // optional valid JS object with JS API naming ex: { className: "my-class", style: { fontFamily: "Verdana" }, id: "my-id"}
    //   },
    //   class: ''             // optional class names space delimited list for title item ex: "text-center"
    // },
    // {
    //   name: 'Colors',
    //   url: '/theme/colors',
    //   icon: 'icon-drop',
    // },
    // {
    //   name: 'Typography',
    //   url: '/theme/typography',
    //   icon: 'icon-pencil',
    // },
    // {
    //   title: true,
    //   name: 'Components',
    //   wrapper: {
    //     element: '',
    //     attributes: {},
    //   },
    // },
    {
      name: "Routes",
      icon: "icon-graph",
      children: [
        {
          name: "Add",
          url: "/bus-routes",
          icon: "icon-graph"
        },
        {
          name: "View",
          url: "/view-routes",
          icon: "icon-graph"
        }
        // {
        //   name: 'Update',
        //   url: '/base/carousels',
        //   icon: 'icon-puzzle',
        // },
        // {
        //   name: 'Delete',
        //   url: '/base/collapses',
        //   icon: 'icon-puzzle',
        // },
        //     {
        //       name: 'Dropdowns',
        //       url: '/base/dropdowns',
        //       icon: 'icon-puzzle',
        //     },
        //     {
        //       name: 'Forms',
        //       url: '/base/forms',
        //       icon: 'icon-puzzle',
        //     },
        //     {
        //       name: 'Jumbotrons',
        //       url: '/base/jumbotrons',
        //       icon: 'icon-puzzle',
        //     },
        //     {
        //       name: 'List groups',
        //       url: '/base/list-groups',
        //       icon: 'icon-puzzle',
        //     },
        //     {
        //       name: 'Navs',
        //       url: '/base/navs',
        //       icon: 'icon-puzzle',
        //     },
        //     {
        //       name: 'Paginations',
        //       url: '/base/paginations',
        //       icon: 'icon-puzzle',
        //     },
        //     {
        //       name: 'Popovers',
        //       url: '/base/popovers',
        //       icon: 'icon-puzzle',
        //     },
        //     {
        //       name: 'Progress Bar',
        //       url: '/base/progress-bar',
        //       icon: 'icon-puzzle',
        //     },
        //     {
        //       name: 'Switches',
        //       url: '/base/switches',
        //       icon: 'icon-puzzle',
        //     },
        //     {
        //       name: 'Tables',
        //       url: '/base/tables',
        //       icon: 'icon-puzzle',
        //     },
        //     {
        //       name: 'Tabs',
        //       url: '/base/tabs',
        //       icon: 'icon-puzzle',
        //     },
        //     {
        //       name: 'Tooltips',
        //       url: '/base/tooltips',
        //       icon: 'icon-puzzle',
        //     },
      ]
    },
    {
      name: "Buses",
      icon: "icon-speedometer",
      children: [
        {
          name: "Add",
          url: "/add-bus",
          icon: "icon-speedometer"
        },
        {
          name: "View",
          url: "/view-bus",
          icon: "icon-speedometer"
        }
      ]
    },
    {
      name: "Employee",
      url: "/",
      icon: "icon-people",
      children: [
        {
          name: "Add",
          url: "/add-driver",
          icon: "icon-people"
          // badge: {
          //   variant: 'info',
          //   text: 'NEW',
          // },
        },
        {
          name: "View",
          url: "/view-driver",
          icon: "icon-people"
        }
      ]
    },

    {
      name: "Allowed Passenger",
      icon: "icon-people",
      children: [
        {
          name: "Add Passengers",
          url: "/add-paid-students",
          icon: "icon-people"
          // badge: {
          //   variant: 'info',
          //   text: 'NEW',
          // },
        },
        {
          name: "View",
          url: "/view-paid-students",
          icon: "icon-people"
        }
      ]
    },

    {
      name: "Previous Trips",
      url: "/",
      icon: "icon-pie-chart"
    },
    // {
    //   name: 'Notifications',
    //   url: '/notifications',
    //   icon: 'icon-bell',
    //   children: [
    //     {
    //       name: 'Alerts',
    //       url: '/notifications/alerts',
    //       icon: 'icon-bell',
    //     },
    //     {
    //       name: 'Badges',
    //       url: '/notifications/badges',
    //       icon: 'icon-bell',
    //     },
    //     {
    //       name: 'Modals',
    //       url: '/notifications/modals',
    //       icon: 'icon-bell',
    //     },
    //   ],
    // },
    // {
    //   name: 'Widgets',
    //   url: '/widgets',
    //   icon: 'icon-calculator',
    //   badge: {
    //     variant: 'info',
    //     text: 'NEW',
    //   },
    // },
    {
      divider: true
    }
    // {
    //   title: true,
    //   name: 'Extras',
    // },
    // {
    //   name: 'Pages',
    //   url: '/pages',
    //   icon: 'icon-star',
    //   children: [
    //     {
    //       name: 'Login',
    //       url: '/login',
    //       icon: 'icon-star',
    //     },
    //     {
    //       name: 'Register',
    //       url: '/register',
    //       icon: 'icon-star',
    //     },
    //     {
    //       name: 'Error 404',
    //       url: '/404',
    //       icon: 'icon-star',
    //     },
    //     {
    //       name: 'Error 500',
    //       url: '/500',
    //       icon: 'icon-star',
    //     },
    //   ],
    // },
    // {
    //   name: 'Disabled',
    //   url: '/dashboard',
    //   icon: 'icon-ban',
    //   attributes: { disabled: true },
    // },
  ]
};
