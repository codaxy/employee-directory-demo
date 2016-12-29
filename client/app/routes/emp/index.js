import { HtmlElement, Link, TextField, DateField, ValidationGroup, LookupField } from 'cx/widgets';
import { Rescope, LabelsTopLayout } from 'cx/ui';
import Controller from './Controller';


export default <cx>
    <main class="b-emp" controller={Controller}>
        <Rescope bind="$page.info" visible:expr="{status}=='ok'">
            <header putInto="header">
                <Link href="~/"><i class="fa fa-arrow-left"/></Link>
                <h2 text:expr="{mode}=='edit' ? 'Edit Profile' : 'View Profile'"/>
                <a href="#" visible:expr="{mode}!='edit'"><i class="fa fa-pencil" onClick="edit"/></a>
                <a href="#" visible:expr="{mode}=='edit' && {valid}"><i class="fa fa-check" onClick="save"/></a>
                <a href="#" visible:expr="{mode}=='edit'"><i class="fa fa-times" onClick="cancel"/></a>
            </header>

            <div class="e-emp-details">
                <ValidationGroup valid:bind="valid">
                    <div class="e-emp-general row">

                        <figure>
                            <img src:expr="{data.pictureUrl} || 'http://placehold.it/200x200'" alt="Person"/>
                        </figure>

                        <div style="flex:1">
                            <div class="row">
                                <div layout={LabelsTopLayout} class="form-group">
                                    <TextField
                                        value:bind="data.firstName"
                                        label="First Name"
                                        mode:bind="mode"
                                        style="width:100%; min-width:10rem; font-size: 2rem"
                                        maxLength={50}
                                        required
                                        visited
                                        autoFocus
                                    />
                                </div>
                                <div layout={LabelsTopLayout} class="form-group">
                                    <TextField
                                        value:bind="data.lastName"
                                        label="Last Name"
                                        mode:bind="mode"
                                        style="width:100%; min-width:10rem; font-size: 2rem"
                                        required
                                        visited
                                        maxLength={50}
                                    />
                                </div>
                            </div>

                            <div layout={LabelsTopLayout} class="form-group">
                                <TextField
                                    value:bind="data.title"
                                    label="Position/Title"
                                    mode:bind="mode"
                                    style="width:100%; min-width: 10rem; max-width: 22rem;"
                                    maxLength={150}
                                />
                            </div>

                            <div layout={LabelsTopLayout} class="form-group">
                                <TextField
                                    value:bind="data.pictureUrl"
                                    label="Picture URL"
                                    mode:bind="mode"
                                    style="width: 100%;min-width: 20rem;font-size:0.8rem"
                                    maxLength={200}
                                />
                            </div>

                        </div>

                    </div>

                    <div class="row" style="padding: 1rem 0">

                        <section>
                            <h6>Details</h6>
                            <div layout={LabelsTopLayout} class="form-group">
                                <LookupField
                                    value:bind="data.officeId"
                                    text:bind="data.office.name"
                                    label="Office"
                                    mode:bind="mode"
                                    emptyText="-"
                                    style="width:100%; min-width:20rem"
                                    onQuery="queryOffices"
                                    required
                                    visited
                                    optionTextField='name'
                                />
                            </div>
                            <div layout={LabelsTopLayout} class="form-group">
                                <LookupField
                                    value:bind="data.departmentId"
                                    text:bind="data.department.name"
                                    label="Department"
                                    mode:bind="mode"
                                    emptyText="-"
                                    style="width:100%; min-width:20rem"
                                    onQuery="queryDepartments"
                                    required
                                    visited
                                    optionTextField='name'
                                />
                            </div>

                            <div layout={LabelsTopLayout} class="form-group">
                                <DateField
                                    value:bind="data.startDate"
                                    label="Joined"
                                    mode:bind="mode"
                                    emptyText="-"
                                    style="width:100%; min-width:20rem;"
                                />
                            </div>
                        </section>

                        <section>
                            <h6>Phone</h6>

                            <div layout={LabelsTopLayout} class="form-group">
                                <TextField
                                    value:bind="data.mobilePhone"
                                    label="Mobile"
                                    mode:bind="mode"
                                    emptyText="-"
                                    style="width:100%; min-width:15rem"
                                    maxLength={15}
                                />
                            </div>

                            <div layout={LabelsTopLayout} class="form-group">
                                <TextField
                                    value:bind="data.officePhone"
                                    label="Office"
                                    mode:bind="mode"
                                    emptyText="-"
                                    style="width:100%; min-width:15rem"
                                    maxLength={15}
                                />
                            </div>

                            <div layout={LabelsTopLayout} class="form-group">
                                <TextField
                                    value:bind="data.homePhone"
                                    label="Home"
                                    mode:bind="mode"
                                    emptyText="-"
                                    style="width:100%; min-width:15rem"
                                    maxLength={15}
                                />
                            </div>
                        </section>

                        <section>
                            <h6>Email</h6>

                            <div layout={LabelsTopLayout} class="form-group">
                                <TextField
                                    value:bind="data.primaryEmail"
                                    label="Primary"
                                    mode:bind="mode"
                                    emptyText="-"
                                    style="width:100%; min-width:20rem"
                                    maxLength={50}
                                />
                            </div>
                            <div layout={LabelsTopLayout} class="form-group">
                                <TextField
                                    value:bind="data.secondaryEmail"
                                    label="Secondary"
                                    mode:bind="mode"
                                    emptyText="-"
                                    style="width:100%; min-width:20rem"
                                    maxLength={50}
                                />
                            </div>
                        </section>


                    </div>
                </ValidationGroup>
            </div>
        </Rescope>
    </main>
</cx>
