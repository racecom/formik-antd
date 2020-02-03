
export const buildDirectory = process.env["Agent.BuildDirectory"]
export const buildDirectory2 = process.env["Agent"]?.["BuildDirectory"]
export const buildDirectory3 = process.env["Agent_BuildDirectory"]
export const buildId = process.env["BUILD_BUILDID"]
export const buildNumber = process.env["BUILD_BUILDNUMBER"]
export const commit = process.env["BUILD_SOURCEVERSION"]
export const time = process.env["SYSTEM_PIPELINESTARTTIME"]