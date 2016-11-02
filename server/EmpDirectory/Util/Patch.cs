using Newtonsoft.Json;
using Newtonsoft.Json.Linq;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace EmpDirectory.Util
{
    public class JsonPatch
    {
        public static void Apply(object source, JObject data, JsonSerializerSettings settings)
        {
            using (var reader = data.CreateReader())
            {
                var serializer = JsonSerializer.Create(settings);
                serializer.Populate(reader, source);
            }
        }
    }
}