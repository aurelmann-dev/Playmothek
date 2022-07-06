<?php

namespace App\Controller;

use App\Entity\Pages;
use App\Repository\PagesRepository;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;

#[Route('/kollectors')]
class PagesController extends AbstractController
{
    //  ~Page liste kollectors~
    #[Route('/', name: 'app_kollectors')]
    public function kollectorsList(PagesRepository $pagesRepository): Response
    {
        return $this->render('pages/index.html.twig', [
            'pages' => $pagesRepository->findAll()
        ]);
    }
    // (['created_at' => 'desc'])

    //  ~Page one kollector~
    #[Route('/{id}', name: 'app_page_kollector', methods: ['GET'])]
    public function pageKollector(Pages $page): Response
    {
        return $this->render('pages/show.html.twig', [
            'page' => $page,
        ]);
    }
}
