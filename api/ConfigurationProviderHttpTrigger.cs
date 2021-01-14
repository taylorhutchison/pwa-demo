using System;
using System.IO;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Azure.WebJobs;
using Microsoft.Azure.WebJobs.Extensions.Http;
using Microsoft.AspNetCore.Http;
using Microsoft.Extensions.Logging;
using Newtonsoft.Json;
using PWADemo.Function.Models;

namespace PWADemo.Function
{
    public static class ConfigurationProviderHttpTrigger
    {
        [FunctionName("ConfigurationProviderHttpTrigger")]
        public static IActionResult Run(
            [HttpTrigger(AuthorizationLevel.Anonymous, "get", "post", Route = null)] HttpRequest req,
            ILogger log)
        {
            log.LogInformation("C# HTTP trigger function processed a request.");
            var configuration = new Configuration
            {
                ClientId = Environment.GetEnvironmentVariable("clientId"),
                Authority = Environment.GetEnvironmentVariable("authority"),
                RedirectUri = Environment.GetEnvironmentVariable("redirectUri"),
                PostLogoutRedirectUri = Environment.GetEnvironmentVariable("postLogoutRedirectUri")
            };
            return new OkObjectResult(configuration);
        }
    }
}
