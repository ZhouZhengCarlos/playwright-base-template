import { test as base } from '@playwright/test';
import { GalleryComponent } from '@components/galleryComponent';
import { GlobalHeaderComponent } from '@components/globalHeaderComponent';
import { HeroComponent } from '@components/heroComponent';
import { HotspotComponent } from '@components/hotspotComponent';
import { OfferComponent } from '@components/offerComponent';
import { SubNavigationComponent } from '@components/subNavigationComponent';
import { VisualizerComponent } from '@components/visualizerComponent';
import { GlobalFooterComponent } from '@components/globalFooterComponent';
import { ThirdPartyComponent } from '@components/thirdPartyComponent';
import { DealerCardComponent } from '@components/dealerCardComponent';
import { StayInformedComponent } from '@components/StayInformedComponent';
import { SafetyComponent } from '@components/safetyComponent';
import { OverlayComponent } from '@components/overlayComponent';
import { StylesComponent } from '@components/stylesComponent';
import { DisclaimerComponent } from '@components/DisclaimerComponent';
import { InformationLayerComponent } from '@components/informationLayerComponent';
import { StoryComponent } from '@components/StoryComponent';
import { CopyBlockComponent } from '@components/copyBlockComponent';
import { ContentTileComponent } from '@components/contentTileComponent';
import { MessageBarComponent } from '@components/messageBarComponent';
import { FilterBarComponent } from '@components/filterBarComponent';
import { VechicleSelectorComponent } from '@components/vehicleSelectorComponent';
import { OfferExperienceComponent } from '@components/offerExperienceComponent';
import { LCertifiedPage } from '@pages/lCertifiedPage';
import { ZipInputComponent } from '@components/zipComponent';
import { RequestBrochureComponent } from '@components/requestBrochureComponent';
import { OffersFormComponent } from '@components/offersFormComponent';
import { NewsletterComponent } from '@components/newsletterComponent';

type ComponentFixtures = {
  galleryComponent: GalleryComponent;
  globalHeaderComponent: GlobalHeaderComponent;
  heroComponent: HeroComponent;
  hotspotComponent: HotspotComponent;
  offerComponent: OfferComponent;
  subNavigationComponent: SubNavigationComponent;
  visualizerComponent: VisualizerComponent;
  globalFooterComponent: GlobalFooterComponent;
  thirdPartyComponent: ThirdPartyComponent;
  dealerCardComponent: DealerCardComponent;
  stayInformedComponent: StayInformedComponent;
  safetyComponent: SafetyComponent;
  overlayComponent: OverlayComponent;
  stylesComponent: StylesComponent;
  disclaimerComponent: DisclaimerComponent;
  informationLayerComponent: InformationLayerComponent;
  storyComponent: StoryComponent;
  copyBlockComponent: CopyBlockComponent;
  contentTileComponent: ContentTileComponent;
  messageBarComponent: MessageBarComponent;
  filterBarComponent: FilterBarComponent;
  vehicleSelectorComponent: VechicleSelectorComponent;
  offerExperienceComponent: OfferExperienceComponent;
  zipInputComponent: ZipInputComponent;
  requestBrochureComponent: RequestBrochureComponent;
  lcertifiedPage: LCertifiedPage;
  offersFormComponent: OffersFormComponent;
  newsletterComponent: NewsletterComponent;
};

export const test = base.extend<ComponentFixtures>({
  galleryComponent: async ({ page }, use) => {
    await use(new GalleryComponent(page));
  },
  globalHeaderComponent: async ({ page }, use) => {
    await use(new GlobalHeaderComponent(page));
  },
  heroComponent: async ({ page }, use) => {
    await use(new HeroComponent(page));
  },
  hotspotComponent: async ({ page }, use) => {
    await use(new HotspotComponent(page));
  },
  offerComponent: async ({ page }, use) => {
    await use(new OfferComponent(page));
  },
  subNavigationComponent: async ({ page }, use) => {
    await use(new SubNavigationComponent(page));
  },
  visualizerComponent: async ({ page }, use) => {
    await use(new VisualizerComponent(page));
  },
  globalFooterComponent: async ({ page }, use) => {
    await use(new GlobalFooterComponent(page));
  },
  thirdPartyComponent: async ({ page }, use) => {
    await use(new ThirdPartyComponent(page));
  },
  dealerCardComponent: async ({ page }, use) => {
    await use(new DealerCardComponent(page));
  },
  stayInformedComponent: async ({ page }, use) => {
    await use(new StayInformedComponent(page));
  },
  safetyComponent: async ({ page }, use) => {
    await use(new SafetyComponent(page));
  },
  overlayComponent: async ({ page }, use) => {
    await use(new OverlayComponent(page));
  },
  stylesComponent: async ({ page }, use) => {
    await use(new StylesComponent(page));
  },
  disclaimerComponent: async ({ page }, use) => {
    await use(new DisclaimerComponent(page));
  },
  informationLayerComponent: async ({ page }, use) => {
    await use(new InformationLayerComponent(page));
  },
  storyComponent: async ({ page }, use) => {
    await use(new StoryComponent(page));
  },
  copyBlockComponent: async ({ page }, use) => {
    await use(new CopyBlockComponent(page));
  },
  contentTileComponent: async ({ page }, use) => {
    await use(new ContentTileComponent(page));
  },
  messageBarComponent: async ({ page }, use) => {
    await use(new MessageBarComponent(page));
  },
  filterBarComponent: async ({ page }, use) => {
    await use(new FilterBarComponent(page));
  },
  vehicleSelectorComponent: async ({ page }, use) => {
    await use(new VechicleSelectorComponent(page));
  },
  offerExperienceComponent: async ({ page }, use) => {
    await use(new OfferExperienceComponent(page));
  },
  zipInputComponent: async ({ page }, use) => {
    await use(new ZipInputComponent(page));
  },
  lcertifiedPage: async ({ page }, use) => {
    await use(new LCertifiedPage(page));
  },
  requestBrochureComponent: async ({ page }, use) => {
    await use(new RequestBrochureComponent(page));
  },
  offersFormComponent: async ({ page }, use) => {
    await use(new OffersFormComponent(page));
  },
  newsletterComponent: async ({ page }, use) => {
    await use(new NewsletterComponent(page));
  },
});