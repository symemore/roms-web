import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '../shared/shared.module';
import { RegistrationListComponent } from '../registration/registration-list/registration-list.component';
import { CreateUserComponent } from '../registration/create-user/create-user.component';
import { RegistrationRoutingModule } from './registration.routing';
import { UserCreatedSuccessDialogComponent } from './user-created-success-dialog/user-created-success-dialog.component';
import { RecruitmentComponent } from './recruitment/recruitment.component';
import { RecommendComponent } from './recommend/recommend.component';
import { JobRecommendComponent } from './job-recommend/job-recommend.component';
import { RecruitmentDetailsComponent } from './recruitment-details/recruitment-details.component';
import { TransferListComponent } from './transfer-list/transfer-list.component';
import { DemandListComponent } from './demand-list/demand-list.component';
import { RecommendationListComponent } from './recommendation-list/recommendation-list.component';
import { MatCheckboxDefaultOptions, MAT_CHECKBOX_DEFAULT_OPTIONS } from '@angular/material/checkbox';


@NgModule({
    imports: [
        CommonModule,
        SharedModule,
        RegistrationRoutingModule
    ],
    providers: [{
        provide: MAT_CHECKBOX_DEFAULT_OPTIONS, 
        useValue: { clickAction: 'noop' } as MatCheckboxDefaultOptions
    }],
    declarations: [
        RegistrationListComponent,
        CreateUserComponent,
        UserCreatedSuccessDialogComponent,
        RecruitmentComponent,
        RecommendComponent,
        JobRecommendComponent,
        RecruitmentDetailsComponent,
        TransferListComponent,
        DemandListComponent,
        RecommendationListComponent
    ]
})
export class RegistrationModule { }
