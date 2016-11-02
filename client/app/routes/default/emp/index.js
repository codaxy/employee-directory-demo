import {HtmlElement} from 'cx/ui/HtmlElement';
import {Rescope} from 'cx/ui/Rescope';
import {Link} from 'cx/ui/nav/Link';
import Controller from './Controller';

import {TextField} from 'cx/ui/form/TextField';
import {DateField} from 'cx/ui/form/DateField';
import {ValidationGroup} from 'cx/ui/form/ValidationGroup';
import {LookupField} from 'cx/ui/form/LookupField';
import {LabelsTopLayout} from 'cx/ui/layout/LabelsTopLayout';

export default <cx>
    <div
        controller={Controller}
        class={{
            "b-empov": true,
            "s-loading": { expr: "{$page.info.status}=='loading'"}
        }}
    >
        <Rescope bind="$page.info" visible:expr="{status}=='ok'">
            <header class="e-empov-header">
                <Link href="~/"><i class="fa fa-arrow-left" /></Link>
                <h2 text:tpl="{data.firstName} {data.lastName}">
                    Person Profile
                </h2>
                <a href="#" visible:expr="{mode}!='edit'"><i class="fa fa-pencil" onClick="edit" /></a>
                <a href="#" visible:expr="{mode}=='edit' && {valid}"><i class="fa fa-check" onClick="save" /></a>
                <a href="#" visible:expr="{mode}=='edit'"><i class="fa fa-times" onClick="cancel" /></a>
            </header>

            <div class="e-empov-details">
                <ValidationGroup valid:bind="valid">
                    <div class="row">
                        <img src:expr="{data.pictureUrl} || 'http://placehold.it/200x200'" alt="Person" />

                        <section visible:expr="{mode}=='edit'" style="flex:1">
                            <h6>General</h6>

                            <div class="row">
                                <div layout={LabelsTopLayout} class="form-group">
                                    <TextField
                                        value:bind="data.firstName"
                                        label="First Name"
                                        mode:bind="mode"
                                        style="width:100%; min-width:10rem"
                                        maxLength={50}
                                        required
                                        autoFocus
                                    />
                                </div>

                                <div layout={LabelsTopLayout} class="form-group">
                                    <TextField
                                        value:bind="data.lastName"
                                        label="Last Name"
                                        mode:bind="mode"
                                        style="width:100%; min-width:10rem"
                                        required
                                        maxLength={50}
                                    />
                                </div>
                            </div>

                            <div layout={LabelsTopLayout} class="form-group">
                                <TextField
                                    value:bind="data.title"
                                    label="Position/Title"
                                    mode:bind="mode"
                                    style="width:100%; min-width: 10rem; max-width: 22rem"
                                    maxLength={150}
                                />
                            </div>

                            <div layout={LabelsTopLayout} class="form-group">
                                <TextField
                                    value:bind="data.pictureUrl"
                                    label="Picture URL"
                                    mode:bind="mode"
                                    style="width: 100%;min-width: 20rem"
                                    maxLength={200}
                                />
                            </div>

                        </section>
                    </div>

                    <div class="row" style="padding: 1rem 0">
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

                        <section>
                            <h6>Corporate</h6>
                            <div layout={LabelsTopLayout} class="form-group">
                                <TextField
                                    value:bind="data.officeName"
                                    label="Office"
                                    mode:bind="mode"
                                    emptyText="-"
                                    style="width:100%; min-width:20rem"
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
                                    optionTextField='name'
                                />
                            </div>

                            <div layout={LabelsTopLayout} class="form-group">
                                <DateField
                                    value:bind="data.startDate"
                                    label="Joined"
                                    mode:bind="mode"
                                    emptyText="-"
                                    style="width:100%; min-width:20rem"
                                />
                            </div>
                        </section>
                    </div>
                </ValidationGroup>
            </div>
        </Rescope>
    </div>
</cx>
