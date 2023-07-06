const express = require('express')
const routes = express.Router()

const ContactRoutes = require('./ContractRoutes')
const UserRoutes = require('./UserRoutes')
const RolesRoutes = require('./RolesRoutes')
const PermissionRoutes = require('./PermissionsRoutes')
const UserRoleRoutes = require('./UsersRolesRoutes')
const PermissionRoleRoutes = require('./PermissionsRolesRoutes')
const CategoryRoutes = require('./CategoryRoutes')
const CompaniesRoutes = require('./CompaniesRoutes')
const TraineeRoutes = require('./TraineeRoutes')

routes.use(ContactRoutes)
routes.use(UserRoutes)
routes.use(RolesRoutes)
routes.use(PermissionRoutes)
routes.use(UserRoleRoutes)
routes.use(PermissionRoleRoutes)
routes.use(CategoryRoutes)
routes.use(CompaniesRoutes)
routes.use(TraineeRoutes)


module.exports = routes
