package org.mg.poc.boundary;

import javax.ws.rs.GET;
import javax.ws.rs.Path;

@Path("data")
public class DataResource {

    @GET
    public String getContent() {
        return "This is the test content of the page";
    }
}
