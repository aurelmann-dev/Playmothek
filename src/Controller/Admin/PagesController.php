<?php

namespace App\Controller\Admin;

use DateTime;
use App\Entity\Pages;
use App\Form\PagesType;
use App\Form\PageUserEditType;
use App\Repository\PagesRepository;
use Symfony\Component\Finder\Finder;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;
use Sensio\Bundle\FrameworkExtraBundle\Configuration\IsGranted;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;

/**
 * Require ROLE_ADMIN for all the actions of this controller
 *
 * @IsGranted("ROLE_ADMIN")
 */

#[Route('admin/pages')]
class PagesController extends AbstractController
{
    // ~Admin only => See all collector page~
    #[Route('/', name: 'app_admin_pages')]
    public function pages(PagesRepository $pagesRepository)
    {

        return $this->render('admin/pages/pages_list.html.twig', [
            'pages' => $pagesRepository->findAll()
        ]);
    }


    // ~Admin only => Create a new collector page~
    #[Route('/new', name: 'app_admin_page_new')]
    public function newPage(Request $request, PagesRepository $pagesRepository)
    {
        $page = new Pages();
        $form = $this->createForm(PagesType::class, $page);
        $form->handleRequest($request);

        if ($form->isSubmitted() && $form->isValid()) {

            $pagesRepository->add($page, true);

            return $this->redirectToRoute('app_admin_pages');
        }
        return $this->render('admin/pages/new.html.twig', [
            'form' => $form->createView()
        ]);
    }



    // ~Admin only => See one collector page~
    #[Route('/{id}', name: 'app_admin_page_show', methods: ['GET'])]
    public function show(Pages $page): Response
    {
        return $this->render('admin/pages/show.html.twig', [
            'page' => $page,
        ]);
    }

    // ~Admin only => Edit a collector page~
    #[Route('/edit/{id}', name: 'app_admin_page_edit')]
    public function editPage(Request $request, PagesRepository $pagesRepository, Pages $page)
    {
        $form = $this->createForm(PageUserEditType::class, $page);
        $form->handleRequest($request);

        if ($form->isSubmitted() && $form->isValid()) {

            // ~Picture~           
            // $pictureData = $form->get('picture')->getData();
            // $pictureName = md5(uniqid()) . '.' . $pictureData->guessExtension();
            // $page->setPicture($pictureName);
            // $pictureData->move($this->getParameter('upload_directory'), $pictureName);
            // dd($pictureData);
            $pagesRepository->add($page, true);

            return $this->redirectToRoute('app_admin_pages');
        }
        return $this->render('admin/pages/edit.html.twig', [
            'form' => $form->createView()
        ]);
    }
    // ~Admin only => Delete a collector page~
    #[Route('/delete/{id}', name: 'app_admin_page_delete')]
    public function deletePage(Request $request, Pages $page, PagesRepository $pagesRepository)
    {
        //   if ($this->isCsrfTokenValid('delete' . $page->getId(), $request->request->get('_token'))) {
        $pagesRepository->remove($page, true);
        //   }
        $this->addFlash('delete_page', 'Page supprimée.');
        return $this->redirectToRoute('app_admin_pages', [], Response::HTTP_SEE_OTHER);
    }
}
