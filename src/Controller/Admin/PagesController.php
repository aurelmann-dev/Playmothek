<?php

namespace App\Controller\Admin;

use App\Entity\Pages;
use App\Form\PagesType;
use App\Repository\PagesRepository;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\Routing\Annotation\Route;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;

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

    // ~Admin only => Edit a collector page~
    #[Route('/edit/{id}', name: 'app_admin_page_edit')]
    public function editPage(Request $request, PagesRepository $pagesRepository, Pages $page)
    {
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

    // ~Admin only => Delete a collector page~
    #[Route('/delete/{id}', name: 'app_admin_page_delete')]
    public function deletePage(PagesRepository $pagesRepository, Pages $page, Request $request)
    {       
            $pagesRepository->remove($page, true);

            $this->addFlash('delete_page', 'Page collectionneur supprimée.');
        
        return $this->redirectToRoute('app_admin_pages');
    }
}
